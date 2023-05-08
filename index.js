const express=require("express");
const app=express();
const dotenv=require("dotenv");
const jwt=require('jsonwebtoken');
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const startDatabase=require("./database/db");
const cloudinary=require("cloudinary").v2;
dotenv.config({path:"./config.env"});
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET_KEY
});

const PORT=process.env.PORT || 8000;
app.use(bodyParser.json({limit:"10mb"}));

const cors=require("cors");
const auth = require("./middleware/Auth");
app.use(bodyParser.urlencoded({extended:true,limit:"10mb"}));
// *************** for cors errror ********************
app.use(cors({origin:["http://localhost:3000"],credentials:true}));
app.use(cookieParser());
startDatabase();
app.get("/",(req,res)=>{
  res.send("Welcome to Node app");
})
// ****** managing user authentication ************
// app.use("/api/user",require("./controllers/User"))
app.use("/api/v1/post",require("./routes/Post"))
app.use("/api/v1/user",require("./routes/User"))
app.get("/set",(req,res) => {
res.cookie("vercel", "mycercelcookies");
 res.json({
    success: true,
    body:req.cookies,
    msg:"token "+req.cookies.jwt
  })
}
  )
app.get("/auth",(req,res) => {

  res.json({
    success: true,
    body:req.cookies,
    msg:"token "+req.cookies.vercel
  })
}
  )

app.listen(PORT,()=>{})
