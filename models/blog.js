const mongoose=require('mongoose')

blogSchema=new mongoose.Schema({
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
},{timestamps:true})

const Blog=mongoose.model('Blog',blogSchema )
module.exports=Blog