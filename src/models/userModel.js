const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName : String,
    lastName : String,
    mobile : {
        type : Number,
        required :true
    },
    emailId : String,
    password : {
        type: String,
        required :true
    },
    gender : {
        type : String,
        enum : ["male", "female" ,"other"]
    },
	isDeleted : {
        type : Boolean,
        default :false
    },
    age : Number,
    msg:String
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema)
