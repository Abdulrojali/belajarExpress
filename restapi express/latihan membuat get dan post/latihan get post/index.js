const express= require('express')
const app=express()
app.get('/product',(req,res)=>{
    res.send('methode get untuk send data product')
})

app.post('/product',(req,res)=>{
    res.send('methode post untuk send data product')
})

app.listen(8080,()=>{
    console.log('http://localhost:8080')
})