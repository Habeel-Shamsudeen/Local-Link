require('dotenv').config();
const mongoose = require("mongoose");
const  DB_URL  = process.env.DB_URL;
const bcrypt = require("bcrypt");
mongoose
  .connect(DB_URL)
  .then(() => console.log("mongoDB connected successfully!"));


  const workPostSchema = new mongoose.Schema({
    title:{
      type:String,
      required:true
    },
    imgUrl:{
      type:String,
      required:true
    },
    desc:{
      type:String,
      required:true
    },
    pay:{
      type:String,
      required:true
    },
    location:{
      type:String
    }
  })

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30,
  },
  aadhar:{
    type: String,
    required: false,
    trim: true,
    maxLength: 12,
  },
  phno:{
    type: String,
    required: true,
    trim: true,
    maxLength: 10,
  },
  mode:{
    type: String,
    required: true,
    trim: true,
    maxLength: 20,
  }
});

userSchema.methods.createHash = async (plain_password) => {
  const salt = 10;
  return await bcrypt.hash(plain_password, salt);
};

userSchema.methods.validatePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};
const User = mongoose.model("User", userSchema);

const workPost = mongoose.model("workPost",workPostSchema)

module.exports = {
  User,
  workPost
};