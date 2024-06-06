const express =require('express')
const app=express()

app.use((req,res,next)=>{
    const {name} =req.query
    if(name){
        next()
    }
    else{
        res.send('tolong ulangi lagi')
    }
})

app.get('/test',(req,res)=>{
    res.send(`testing ${req.query.name}`)
})
app.listen(8080,()=>{
    console.log('http://localhost:8080')
})