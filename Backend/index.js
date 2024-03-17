const express = require("express");
const rootRouter = require("./routes/index");
const app = express();
const cors = require('cors');
const port = 3000;
require('dotenv').config();

app.use(cors(
  {
    origin:["https://local-link-gistathon.vercel.app/"],
    methods:["POST","GET","PUT"],
    credentials:true
  }
));
app.use(express.json())

app.use("/api/v1", rootRouter);

// app.listen(port, () => {
//   console.log(`connected to port ${port}`);
// });