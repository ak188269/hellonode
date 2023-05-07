import  express  from "express";
import dotenv from 'dotenv'
const bodyParser=require("body-parser");
app.use(bodyParser.json({limit:"10mb"}));
// app.use(express.json({limit:"10mb"}));
// app.use(express.urlencoded({extended:true,limit:"10mb"}));
const cors=require("cors");
const auth = require("./middleware/Auth");
app.use(bodyParser.urlencoded({extended:true,limit:"10mb"}));
app.use(cors({origin:["http://localhost:3000"],credentials:true}));
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