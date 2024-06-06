const express =require('express')
const app = express()

// express.json adalah build in middleware express yang di gunakan untuk memparsing data dalam 
// bentuk json
app.use(express.json())

app.listen(8080,()=>{
    console.log('http://localhost:8080')
})