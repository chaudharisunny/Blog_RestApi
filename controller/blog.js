const { createToken } = require('../middleware/authenticate')
const Blog=require('../models/blog')

const allBlogs=async(req,res)=>{
    try {
        const allBlogs=await Blog.find()
        res.status(200).json({message:'all blogs are avilable',blog:allBlogs})       
    } catch (error) {
        console.error(error.message)
        res.status(500).json({message:'server for the error'})
    }
}
const newBlog=async(req,res)=>{
    const{author,title,desc}=req.body
    try {
        if(!author||!title||!desc){
            res.status(401).json({message:'please required this field'})
        }
      const newBlog=await Blog.create({author,title,desc})
      const token=createToken(newBlog)
      res.status(200).json({message:'new blog created',token})
    } catch (error) {
        console.error(error.message)
        res.status(500).json({message:'server for the error'})
    }
}

const updateBlog=async(req,res)=>{
    const{author,title,desc}=req.body
    try {
        if(!author||!title||!desc){
            res.status(401).json({message:'please required this field'})
        }
        const editBlog=await Blog.findByIdAndUpdate(req.params.id,{author,title,desc},{new:true})
        res.status(200).json({message:'updated blog',blog:editBlog})
    } catch (error) {
        console.error(error.message)
        res.status(500).json({message:'server for the error'})
    }
} 

const deleteBlog=async(req,res)=>{
    try{
        const deleteBlog=await Blog.findByIdAndDelete(req.params.id)
        if(!deleteBlog){
            res.status(401).json({message:'blog are not found'})
        }
        res.status(200).json({message:'deleted blog'})
    }catch(error){
        console.error(error.message)
        res.status(500).json({message:'server for the error'})
    }
}

module.exports={allBlogs,newBlog,updateBlog,deleteBlog}