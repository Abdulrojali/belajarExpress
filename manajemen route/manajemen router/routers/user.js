const express=require('express')
const router=express.Router()

// menggunakan middleware terpisah di routers
router.use('/',(req,res,next)=>{
    const name=req.query
    if(name){
        next()
    }
    else{
        res.status(401)
       throw new Error('not found query name!!')
    }
})

// menggunakan router
router.get('/',(req,res)=>{
    const {name}= req.query
    res.send(`welcome ${name}`)
})

module.exports=router