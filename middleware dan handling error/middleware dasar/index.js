const express=require('express')
const app =express()
const morgan =require('morgan')

const {getAuth} = require('./middleware/middleware')

// membuat middleware
app.use(morgan('tiny'))
app.use((req,res,next)=>{
    console.log('middleware sebelum home')
    next()
})

app.get("/",(req,res)=>{
    res.send('home')
})
// app.use((req,res,next)=>{
//     const {id}= req.query
//     if(id){
//         next()
//     }
//     else{
//         console.log('not found id')
//     }
// })
app.get('/halaman',(req,res)=>{
    res.send('halaman')
})

app.get('/login',getAuth,(req,res)=>{
   res.send(`halo ${req.query.username}`)
})
// membuat middleware menampilkan not found 
app.use((req,res)=>{
    res.status(404).send('404')
})
app.listen(8080,()=>{[
    console.log('http://localhost:8080')
]})