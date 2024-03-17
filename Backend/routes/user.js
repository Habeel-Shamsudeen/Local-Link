require('dotenv').config();
const { Router } = require("express");
const z = require("zod");
const { User, workPost } = require("../db");
const jwt = require("jsonwebtoken");
const  JWT_SECRET  = process.env.JWT_SECRET;
const { authMiddleware } = require("../middleware");
const router = Router();

const signUpSchema = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string().min(8),
  aadhar:z.string().max(12).optional(),
  phno:z.string().max(10),
  mode: z.string().trim().refine(val => val === "Customer" || val === "Worker", {
    message: 'Invalid mode. Please choose "Customer" or "Worker".',
  }),
});

const signinSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

router.post("/signup", async (req, res) => {
  const UserDetails = req.body;
  const result = signUpSchema.safeParse(UserDetails);
  if (!result.success) {
    console.log(result)
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }
  const existingUser = await User.findOne({ email: UserDetails.email });
  if (existingUser) {
    console.log("hello exist")
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const user = new User({
    email: UserDetails.email,
    firstName: UserDetails.firstName,
    lastName: UserDetails.lastName,
    phno:UserDetails.phno,
    aadhar:UserDetails.aadhar,
    mode:UserDetails.mode
  });

  var hashedPassword = await user.createHash(UserDetails.password);
  user.password = hashedPassword;
  await user.save();

  const userId = user._id;

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );
  res.json({
    message: "User created successfully",
    token: token,
  });
});

router.post("/signin", async (req, res) => {
  const result = signinSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(411).json({
      message: "Error while logging in",
    });
  }
  const user = await User.findOne({
    email: req.body.email,
  });
  if (!user) {
    return res.status(411).json({
      message: "User do no exist",
    });
  }
  if (await user.validatePassword(req.body.password)) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );
    return res.status(200).json({
      token: token,
      message: "User Successfuly logged in",
    });
  } else {
    return res.status(411).json({
      message: "Incorrect Password",
    });
  }
});

const updationSchema = z.object({
  password: z.string().min(8).optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

router.put("/", authMiddleware, async (req, res) => {
  const { success } = updationSchema.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Error while updating information",
    });
  }
  const user = await User.findById(req.userId);
  if (req.body.password) {
    var hashedPassword = await user.createHash(req.body.password);
    req.body.password = hashedPassword;
  }
  await User.updateOne({ _id: req.userId }, req.body);

  res.json({
    message: "Updated successfully",
  });
});

router.get("/me",authMiddleware,async (req,res)=>{
  
  try{
    const me = await User.findOne({
      _id:req.userId
    });

    res.json({
      email:me.email,
      firstName:me.firstName,
      lastName:me.lastName,
      mode:me.mode,
      loggedIn:true
    })
  }catch(err){
    res.status(411).json({
      loggedIn:false
    })
  }
})

router.get('/workpost',async(req,res)=>{
  const filter = req.query.filter || "";
  try {
    const posts = await workPost.find({
      $or: [
        {
          title: {
            $regex: filter,
            $options: "i",
          },
        },
        {
          desc: {
            $regex: filter,
            $options: "i",
          },
        },
      ],
    });
    res.json({
      post: posts.map((post) => ({
        title: post.title,
        imgUrl: post.imgUrl,
        desc: post.desc,
        pay: post.pay,
        location:post.location
      })),
    });
  } catch (error) {
    console.log("error")
  }
})

router.post('/addworkpost',async(req,res)=>{
  const postDetails = req.body;
  try {
    const post = new workPost({
      title: postDetails.title,
      desc: postDetails.desc,
      imgUrl: postDetails.imgUrl,
      location:postDetails.location,
      pay:postDetails.pay,
    });
    await post.save();
    res.json({
      message:"added"
    });
  } catch (error) {
    console.log("error")
  }
})


module.exports = router;