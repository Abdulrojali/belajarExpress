const express =require('express')
const app=express()

app.get('/',(req,res)=>{
    res.end('home')
})
app.get('/menu',(req,res)=>{
    res.end(' menu')
})
app.get('/about',(req,res)=>{
    res.end(' about')
})
app.get('/service',(req,res)=>{
    res.end(' service')
})


// router params
app.get('/dataMahasiswa/:id',(req,res)=>{
    const id=req.params.id
    res.json(id)
})


// router query
app.get('/listproduct/:id',(req,res)=>{
    const id=req.params.id
    // get router query string params
    // in browser url = /listproduct/:id?category='whats category?'
    const data=req.query.category
    res.send(`id product :${id}, name :${data}`)
})
app.listen(3000,()=>{
    console.log('app listen in port 3000')
})