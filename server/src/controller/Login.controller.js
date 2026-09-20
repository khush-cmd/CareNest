const bcrypt = require('bcrypt');
const User = require('../models/User.model');
const jwt = require('jsonwebtoken')

const loginUser = async(req,res) => {
    console.log("LOGIN CONTROLLER HIT");
    try{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            message: "Email and Password are required"
        })
    }
    const user = await User.findOne({email});
    if(!user){
        return res.status(401).json({
            message : "User Not Found"
        })
    }
    const isPasswordCorrect = await bcrypt.compare(password,user.password);
    if(!isPasswordCorrect){
       return res.status(401).json({
            message : "Invalid email or password"
        })
    };
   
    const token = jwt.sign(
        {id : user._id},
        process.env.JWT_SECRET, 
        {expiresIn : '1d'},
    )
    res.cookie("token",token,{
        httpOnly : true,
        secure : process.env.NODE_ENV === "production",
        sameSite : "strict",
        maxAge : 24*60*60*1000
    });
    console.log("Cookie set karne ka code execute hua");
    
    return res.status(200).json({
        message : "Login Successfully",
        user : {
            email : user.email
        }
    })
}
catch(err){
    console.log(err)
    return res.status(500).json({
        message : "Login Failed"
    })
}
}
module.exports = loginUser