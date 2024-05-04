import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    first_name : {
        type : String,
        required : true,
    },
    last_name : {
       type : String,
       required : true
    },

    accounts : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Account"
    }],
    cvu :{
        type : String,
        unique : true
    }
}, { timestamps: true })

export const AccountSchema = mongoose.model("User",UserSchema)