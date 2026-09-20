const express = require('express');

const loginOutUser = async (req,res) => {
    try{
        res.clearCookie('token');
        
        return res.status(200).json({
            message : "Logout Successfully"
        })
    }
    catch(err){
        res.status(500).json({
            message : "Logout Failed"
        })
    }
}
module.exports = loginOutUser
