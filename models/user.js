const mongoose=require('mongoose')

userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        default:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

const User=mongoose.model('User',userSchema )
module.exports=User