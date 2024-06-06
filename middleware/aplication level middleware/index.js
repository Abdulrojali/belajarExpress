const express=require('express')
const app=express()
const port=8080

// 1. application middleware

// membuat middleware di semua routing 
// app.use((req,res,next)=>{
//     const date=Date.now()
//     console.log(date)
//     next()
// })
// app.get('/',(req,res)=>{
//     res.send('login')
// })

// membuat middleware sesuai dengan routing 
// app.use('/user/:id',(req,res,next)=>{
//     next()
//     const {id}=req.params
//     console.log(id)
// })
// app.get('/user/:id',(req,res)=>{
//     const {id}=req.params
//     res.send(id)
// })

// atau cara lain
function getLog(req,res,next){
    const date=Date.now()
    console.log(date)
    next()
}
app.get('/login',getLog,(req,res)=>{
    res.send('berhasil login')
})

app.listen(port,()=>{
    console.log('http://localhost:8080')
})