const express =require('express')
const app=express()
const path =require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
const comments=[
    {
        id:1,
        name:'ucok',
        deskripsi:'hello world this my comments'
    },
    {
        id:2,
        name:'budi',
        deskripsi:'hello world this my comments'
    },
    {
        id:3,
        name:'ahmad',
        deskripsi:'hello world this my comments'
    },
    {
        id:4,
        name:'ucok',
        deskripsi:'hello world this my comments'
    },
]
// menampilkan data comments 
app.get('/comments',(req,res)=>{
    res.render('comments',{comments})
})
// menampilkan tampilan file add.ejs
app.get('/add',(req,res)=>{
    res.render('add')
})
// mengirim data dari form di file add.ejs
app.post('/commentsData',(req,res)=>{
    const com=req.body
    comments.push({...com})
    res.redirect('comments')
  
})

// mendapatkan data sesuai id 
app.get('/comments/:id',(req,res)=>{
    const idParams=req.params.id
    const comment=comments.find(com=>com.id===parseInt(idParams))
    if(comment){
        res.render('show',{comment})
    }else{
        res.redirect('notfound')
    }
    
})
app.listen(8080,()=>{
    console.log('http://localhost:8080')
})