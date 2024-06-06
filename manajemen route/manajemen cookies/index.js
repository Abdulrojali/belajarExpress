const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
// cookieParser digunakan untuk mengakses cookie di luar client
const cookieParser = require('cookie-parser')

app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// menggunakan cookieParse di express
// secret-key adalah sebuah fungsi yang di buat cookieParser untuk mengenkripsi data cookie
app.use(cookieParser('secret-key'))


app.use('/user',require('./routers/membuatCookie'))
app.use('/getUser',require('./routers/mengambilDataCookies'))
app.use('/signedCookies',require('./routers/signedCookies'))

app.listen(8080,()=>{
    console.log('http:localhost:8080')
})