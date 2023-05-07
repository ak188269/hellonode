import  express  from "express";
import dotenv from 'dotenv'
const app=express();
dotenv.config({path:"./config.env"});
const PORT=process.env.PORT || 8000;
app.route("/").get((req,res)=>{
    res.send("welcome to node app");
})
app.get("/get", (req,res)=>{
    res.json({
        Name:"Avinash",
        Email:"ak122@gmail.com",
        Password:"password"
    })
}
    )
app.listen(PORT,()=>{
    console.log("App is running on ",PORT);
})