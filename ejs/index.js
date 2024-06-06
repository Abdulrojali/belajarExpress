const express=require('express')
const app=express()
const path=require('path')
const jsonData=require('./data.json')
// menggunakan ejs tanpa require ejs
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))


app.get('/',(req,res)=>{
    res.render('interpolasi')
})

app.get('/parsingData',(req,res)=>{
    // dibawah adalah cara parsing data
    // data di parsing kedalam sebuah template bernama random angka dan di render setelah nama path url
    const getRandomAngka=Math.floor(Math.random()*10)
    res.render('parsingData',{randomAngka:getRandomAngka})
})

app.get('/pengkondisian',(req,res)=>{
const angka=Math.floor(Math.random()*10)
    res.render('pengkondisian',{random:angka})
})

app.get('/perulangan',(req,res)=>{
    const mahasiswa=['budi','ahmad','ridho']
    res.render('perulangan',{listMahasiswa:mahasiswa})
})
app.get('/search/:tag',(req,res)=>{
    const {tag} =req.params
    const data=jsonData[tag]
    if(data){
        res.render('search',{datas:data})
    }
    else{
        res.render('notfound',{tag})
    }
})
app.listen(8080,()=>{
    console.log('listen port in 8080')
})