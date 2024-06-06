const express =require('express')
const app =express()

// express.urlencoded digunakan untuk memparsing body permintaan http
app.use(express.urlencoded({extended:true}))
app.listen(8080,()=>{
    console.log('http://localhost:8080')
})