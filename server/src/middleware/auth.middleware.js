const JWT = require('jsonwebtoken');
const User = require('../models/User.model');
const authMiddleware = (req,res,next) => {
try{
console.log("Cookies received:", req.cookies);
    const token = req.cookies?.token;
    if(!token){
        return res.status(401).json({
            message: "Access Denied. Please Login First"
        })
    }
    console.log("Token present:", Boolean(token));
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    console.log("JWT verified successfully");
    //Iska kaam: token ka signature aur expiry check karna. Token valid hua toh decoded payload milega; invalid ya expired hua toh error throw hoga.
    
    req.user = decoded;
    return next();
    //req.user = decoded — verified token ka payload request ke saath attach karta hai.
    // next() — token valid hai, toh request ko aage route/controller tak jaane deta hai.
}
catch(err){
    res.status(401).json({
        message : "Invalid or expired token . Please login again."
    })
}


}
module.exports = authMiddleware