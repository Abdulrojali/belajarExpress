const { timeLog } = require('console')
const express = require('express')
const methodOverride=require('method-override')
const app = express()
const path=require('path')


app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/todo',(req,res)=>{
    res.render('todo')
})

const todo=[
    {id:1,name:'albert',todoWrite:'hello my name is albert',timeLog:Date()},
    {id:2,name:'michael',todoWrite:'hello my name is michael',timeLog:Date()},
    {id:3,name:'jorse',todoWrite:'hello my name is jorse',timeLog:Date()},
    {id:4,name:'nabila',todoWrite:'hello my name is nabila',timeLog:Date()},
]
app.get('/viewTodo',(req,res)=>{
    res.render('todolist',{todo})
})

app.post('/todoData',(req,res)=>{
    const {name,todoList,timeLog}=req.body
    todo.push({name,todoList,timeLog})
    res.redirect('/')
})

app.get('/viewsDetail/:id',(req,res)=>{
    const id=req.params.id
    const datas=todo.find(index=>index.id==parseInt(id))
    if(datas){
        res.render('viewsDetail',{datas})
    }
    else{
        res.render('notfound')
    }
})

// methode mengupdate data ada 2  yaitu put dan patch
// put digunakan untuk mengupdate data banyak sedangkan patch beberapa data pilihan 
app.get('/edit/:id',(req,res)=>{
    const id=req.params.id
    const datas=todo.find(index=>index.id==parseInt(id))
    if(datas){
        res.render('edit',{datas})
    }
})
app.listen(8080,()=>{
    console.log('http://localhost:8080')
})