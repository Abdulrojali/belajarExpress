const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


// mendefinisikan terpisah
app.use('/productions',require('./routers/productions'))
app.use('/user',require('./routers/user'))

app.listen(8080,()=>{
    console.log('http://localhost:8080')
})