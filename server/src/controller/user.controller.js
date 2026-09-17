const bcrypt = require('bcrypt');
const User = require('../models/User.model')
const registerUser = async(req,res) => {
    try{

        const {user,email,password,phone} = req.body;
        const hashedPassword =  await bcrypt.hash(password,10);

        const newUser = await User.create({
            user,
            email,
            password : hashedPassword,
            phone,
        })
        res.status(201).json({
            message : "User register Successfully",
            user : {
                id : newUser._id,
                user : newUser.user,
                email : newUser.email,
                phone : newUser.phone
            }
        });

    } catch(err){
        console.error(err);
        res.status(500).json({
            message : "Registration failed"
        })
    }

}
module.exports = registerUser