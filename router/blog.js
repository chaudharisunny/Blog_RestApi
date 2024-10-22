const express=require('express')
const router=express()

const userController=require('../controller/user')
const blogController=require('../controller/blog')

router.post('/signup',userController.signupUser)
router.post('/login',userController.loginUser)

router.get('/all-blogs',blogController.allBlogs)
router.post('/newblog' ,blogController.newBlog)
router.put('/newblog/:id',blogController.updateBlog)
router.delete('/newblog/:id',blogController.deleteBlog)

module.exports=router