const express=require('express')
const router=express.Router()


router.get('/',(req,res)=>{
    // mengambil data cookies dari router user 
    const {name} = req.cookies
    res.send(name)
})

module.exports=router