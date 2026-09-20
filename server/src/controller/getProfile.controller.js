const User = require('../models/User.model')

const getProfile = async (req,res) => {

    try{
        const user = await User.findById(req.user.id).select('-password');
        if(!user){
            return res.status(401).json({
                message : "User Not Found"
            })
        }
        return res.status(200).json({
            message : "Profile Fetched Successfully",
            user : user
            
        })
    }
    catch(err){
        return res.status(500).json({
            message : "Profile failed to fetch"
        })
    }

};
module.exports = getProfile;