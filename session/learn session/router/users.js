const express = require('express')
const router=express.Router()

const users=[
    {name:'budi',username:'budi123',password:'budi123'},
    {name:'ahmad',username:'ahmad123',password:'ahmad123'},
    {name:'ridho',username:'ridho123',password:'ridho123'},
]

router.get('/',(req,res)=>{
    const cookieUsers=res.cookie('user',users,{signed:true})
    req.session.user=users
    if(cookieUsers){
        res.send('sukses update cookie')
        console.log(cookieUsers)
    }
    else{
        throw new Error('data not found!!')
    }
})

module.exports=router