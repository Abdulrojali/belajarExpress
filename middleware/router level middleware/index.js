const express = require('express')
const app=express()
// mendefinisikan router
const router=express.Router()

// membuat middleware router
router.use((req,res,next)=>{
    const {data}= req.query
    if(data){
        next()
    }
    else{
        console.log('tolong masukkan query!!')
    }
})
// menggunakan middleware router yang telah dibuat di route tertentu
app.use('/home',router)

// membuat routing 
app.get('/home',function(req,res){
    res.send(`${req.query.data}`)
})

// membaca routing
app.listen(8080,()=>{
    console.log('http://localhost:8080')
})
