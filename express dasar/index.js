const express =require('express')
const app=express()
const port=3000
// app.get('/',(req,res)=>{
//     res.send('hello world')
// })
// app.get('/about',(req,res)=>{
//     res.send('this halaman about')
// })
// app.get('/body',(req,res)=>{
//     res.send('this body page')
// })
// app.listen(port,()=>{
//     console.log('port listen in 3000')
// })

// app.use digunakan untuk mendaftarkan middelware pada express js 
// middelware adalah fungsi yang di panggil secara beruntun ketika permintaan http di terima tujuan nya untuk memodifikasi permintaan atau response
// app.use(()=>{
//     console.log('hello world')
// })

// membuat route di express js
// di express untuk membuat router bisa menggunakan http methode seperti get,post,put,delete,all
app.get('/',(req,res)=>{
    res.send('this home page')
})
app.get('/about',(req,res)=>{
    res.send('this about page')
})

// membuat route parameter di express js
// membuat paramater di expres menggunakan :namaparams pada path url 
// untuk mendapatkan nilai pada parameter menggunakan req.params.namaparams contohnya ada di bawah ini
app.get('/mahasiswa/:id/:nama/:nim',(req,res)=>{
    const {id,nama,nim}=req.params
    res.send(`id mahasiswa :${id} nama mahasiswa :${nama} nim mahasiswa :${nim}`)
})

// membuat route query di express js untuk menampilkan string 
    // mendapatkan nilai query string dengan req.query
    // paramater untuk query string iyalah ?namaquery=nilaiquery
    // contoh /search?category=makanan
app.get('/search',(req,res)=>{

    res.send(req.query)
})

// mendengarkan permintaan yang di buat
app.listen(3000,()=>{
    console.log('read in port 3000')
})


// nodemon adalah library javascript yang digunakan untuk memantau perubahan pada file node js/express
// sama halnya dengan live server kita tidak perlu melakukan run program berkali kali

// cara install nodemon npm install -g nodemon 
// cara menggunakan nodemon    nodemon ./nama file js 

