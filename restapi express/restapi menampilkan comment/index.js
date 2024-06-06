const express=require('express')
const app=express()
const path=require('path')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

const comments=[
    {
        name:'budi',
        com:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates dolore magnam corrupti perferendis nihil. Iure est consectetur illum ipsa soluta ipsum ipsam, architecto sed eveniet.'
    },
    {
        name:'budi',
        com:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates dolore magnam corrupti perferendis nihil. Iure est consectetur illum ipsa soluta ipsum ipsam, architecto sed eveniet.'
    },
    {
        name:'budi',
        com:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates dolore magnam corrupti perferendis nihil. Iure est consectetur illum ipsa soluta ipsum ipsam, architecto sed eveniet.'
    },
    {
        name:'budi',
        com:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates dolore magnam corrupti perferendis nihil. Iure est consectetur illum ipsa soluta ipsum ipsam, architecto sed eveniet.'
    },
    {
        name:'budi',
        com:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates dolore magnam corrupti perferendis nihil. Iure est consectetur illum ipsa soluta ipsum ipsam, architecto sed eveniet.'
    },
]

app.get('/comments',(req,res)=>{
    res.render('view',{comments})
})
app.listen(8080,()=>{
    console.log('http://localhost:8080/comments')
})