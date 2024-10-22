const bcrypt=require('bcrypt')
const User=require('../models/user')

const signupUser=async(req,res)=>{
    const{username,email,password}=req.body
    try {
        
        const hashPassword=bcrypt.hash(password,10)
        const newuser=await User.create({username,email,password:hashPassword})
        
        res.status(201).json(newuser)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const loginUser=async(req,res)=>{
    const{email,password}=req.body
    try {
     
        const user=await User.findOne({email})
        if(!user){
            res.status(400).json('invalid credential')
        }
        const isPassword=bcrypt.compareSync(password,user.password)
        if(!user||!isPassword){
            res.status(400).json('invalid credential')
        }else{
            const token=createToken(user)

            return res.status(200).json({ message: 'Login successful', token });
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports={signupUser,loginUser}