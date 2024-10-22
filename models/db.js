const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/myblog').then(()=>{
    console.log('database connect')
}).catch((error)=>{
    console.log(error)
})

