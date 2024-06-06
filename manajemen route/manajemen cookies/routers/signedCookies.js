
const express=require('express')
const router=express.Router()


router.get('/',(req,res)=>{
    res.cookie('username','budi123',{signed:true})
    res.send('signed cookie')
})

module.exports=router