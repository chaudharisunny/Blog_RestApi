const JWT=require('jsonwebtoken')
require('dotenv').config()
const secret=process.env.JWT_SECRET



function createToken(user){
    const payload={
        _id:user._id,
        email:user.email,
        password:user.password
    }
   return JWT.sign(payload,secret,{expiresIn:'1h'})
    
}

function verifyToken(token){
    try {
        return JWT.verify(token,secret)
    } catch (error) {
        console.log({error:error.message});
        
    }
}

module.exports={createToken,verifyToken}