const express=require("express");
const app=express();
const dotenv=require("dotenv");
const jwt=require('jsonwebtoken');
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const startDatabase=require("./database/db");
const cloudinary=require("cloudinary").v2;
const path=require("path");
dotenv.config({path:"./config.env"});
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET_KEY
});

const PORT=process.env.PORT || 8000;

app.use(bodyParser.json({limit:"10mb"}));
app.use(express.json({limit:"10mb"}));
app.use(express.urlencoded({extended:true,limit:"10mb"}));

app.use(bodyParser.json({limit:"10mb"}));
// app.use(express.json({limit:"10mb"}));
// app.use(express.urlencoded({extended:true,limit:"10mb"}));
>>>>>>> c794cc720e0a2e3bb57fd4d3eb6a2593694720e6
const cors=require("cors");
const auth = require("./middleware/Auth");
app.use(bodyParser.urlencoded({extended:true,limit:"10mb"}));

// *************** for cors errror ********************
app.use(cors({origin:true,credentials:true}));
app.use(cookieParser());
startDatabase();

app.use(express.static(path.join(__dirname,'./build')));


app.get("/node",(req,res)=>{
  res.send("Welcome to Node app");
})

// ****** managing user authentication ************
app.use("/api/v1/post",require("./routes/Post"))
app.use("/api/v1/user",require("./routes/User"))

app.get("/set",(req,res) => {
  res.cookie("vercel", "mycercelcookies", { maxAge: 3*5*3600, httpOnly: true });
  // res.cookie("check","thisischeck")
res.json({
success: true,
body:req.cookies,
msg:"token "+req.cookies.jwt
})
}
)
app.get("/auth",(req,res) => {

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
res.json({
success: true,
body:req.cookies,
msg:"token "+req.cookies.vercel
})
}
)
app.listen(PORT,()=>{console.log(`server is running on ${PORT}`);})
