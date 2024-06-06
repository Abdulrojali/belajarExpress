const express = require('express')
const app=express()
const path = require('path')

app.use('view engine','ejs')
app.use('views',path.join(__dirname,'view'))
// express.static digunakan untuk menyajikan file static seperti gambar,file css,file javascript
// assets disini mencangkup directory dengan nama assets
// disana kita tinggal membuat file semacam css atau javascirpt atau gambar.
app.use(express.static('assets'))

app.listen(8080,()=>{
    console.log('http://localhost:8080')
})