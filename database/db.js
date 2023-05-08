const mongoose=require("mongoose");
// const uri="mongodb://127.0.0.1:27017/SocialSite";
const uri=process.env.DATABASE_URL;

const connectToDatabase= async ()=>{
await mongoose.connect(`${uri}`);
    // console.log("connected to database");
}
module.exports=connectToDatabase;
