const express=require('express')
const router=express.Router()

router.use('/',(req,res,next)=>{
    if(req.query.name){
        next()
    }
    else if(!req.query.name){
        res.status(404)
        throw new Error('this not query name!!')
    }
    else{
     res.status(402)
     throw new Error('not found query!1')
    }
})

router.get('/',(req,res)=>{
    const {name}=req.query
    // menambah cookie baru  
    res.cookie('name',name)
    res.status(200).send(`welcome ${name}`)
})
module.exports=router