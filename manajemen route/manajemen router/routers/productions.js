const express=require('express')
const router=express.Router()


router.get('/',(req,res)=>{
    try{
        res.status(200).send('productions')
        // const product=products.find()
        // if(product){
        //     res.status(200).send(product)
        // }
        // else{
        //     throw new Errror('error not found data products')
        // }
    }
    catch{
        res.status(401).send('request time out please refersh page')
    }
})
router.get('/:id',(req,res)=>{
    const {id} = req.params
    res.status(200).send(`your id send in production : ${id}`)
    // try{
    //     const {id} = req.params
    //     const productId=products.findById(id)
    //     if(productId){
    //         res.status(200).send(productId)
    //     }
    //     else{
    //         throw new Errror('error not found data products')
    //     }
    // }
    // catch{
    //     res.status(401).send('request time out please refersh page')
    // }
})


module.exports=router