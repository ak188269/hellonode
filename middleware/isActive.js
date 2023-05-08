const User = require("../model/User")

const isActive =async(req,res,next) =>{
let user=await User.findById(req.user.id);
if(user.isActive===false){
    res.json({success:false,msg:"You are not logged in"})
}
else return next();
}