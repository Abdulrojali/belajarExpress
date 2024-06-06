const express=require('express')
const app =express()



app.get('/',(req,res)=>{
    res.send('home')
})

function getUsername(req,res,next){
    const {username} =req.query
    if(username){
        next()
    }
    else{
        // membuat error handling sendiri
        throw new Error('tolong masukkan username anda!!')
    }
}
app.get('/login',getUsername,(req,res)=>{
    res.send(`hallo, ${req.query.username}`)
})

//create headling error in function routing 
app.get('/products/:id',(req,res)=>{
    const {id}=req.params
    const product=products.findById(id)
    if(product){
        res.status(200).json(product)
    }
    else{
        res.status(404).json({masssage:'not found data by id!!'})
    }
})

// create heandling error use try and catch
app.get('/products',async(req,res)=>{
    try{
        const findsProducts=await products.find()
        if(findsProducts){
            res.status(200).send(findsProducts)
        }
        else{
            throw new Error('not found product')
        }
    }
    catch(err){
        res.status(404).json({masssage:err}) 
    }
})

// create heandling error in function middleware

const errorHandler = (error, request, response, next)=> {
    // Error handling middleware functionality
    console.log( `error ${error.message}`) // log the error
    const status = error.status || 400
    // send back an easily understandable error message to the caller
    response.status(status).send(error.message)
  }
  
  app.get('/products', async (request, response) => {
    try {
      const apiResponse = await axios.get("http://localhost:3001/products")
  
      const jsonResponse = apiResponse.data
      
      response.send(jsonResponse)
    } catch(error) {
      next(error) // calling next error handling middleware
    }
  
  })
  app.use(errorHandler)


app.listen(8080,()=>{
    console.log('http://localhost:8080')
})