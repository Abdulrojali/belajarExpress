const express = require('express')
const cookieParser=require('cookie-parser')
const session =require('express-session')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser('secret-key'))
app.use(session({
    secret:'secret-key',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:true}
}))

app.use('/users',require('./router/users'))
app.listen(8080,()=>{
    console.log('http://localhost:8080')
})
