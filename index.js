import  express  from "express";
import dotenv from 'dotenv'
import cors from "cors";
import startDb from "./database.js";
import User from "./user.js";
const app=express();
dotenv.config({path:"./config.env"});
app.use(cors({origin:"*",credentials:true}));
const PORT=process.env.PORT || 8000;
startDb();
app.route("/").get((req,res)=>{
    res.send("welcome to node app");
})
app.get("/get",async(req,res)=>{
  try {
     console.log("get is called");
    const data={
        name:"Avinash",
        email:"ak122@gmail.com",
        password:"password"
    }
   const user= await User.create({
   ...data
});
    res.json({user})

}
    
catch(err) {
    console.log(err.message);
    res.json({success: false, error: err.message});
}
}
    )
app.listen(PORT,()=>{
    console.log("App is running on ",PORT);
})