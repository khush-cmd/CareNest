const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    user : {
        type : String,
        required : [true, "Please Enter the UserName"],

    },
    email : {
        type: String,
        required: [true,"Email is required"],
        unique: true,
        lowercase : true,
        trime: true
    },
    password : {
        type : String ,
        required : [true,"Enter your password"],
    },
    phone: {
        type : Number,
        required : [true, "Phone number is required"]
    }
})
const User = mongoose.model("User", UserSchema);
module.exports = User;
