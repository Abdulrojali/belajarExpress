// cara membuat middleware di route tertentu 

function getAuth(req,res,next){
    const {username}=req.query
    if(username){
        next()
    }
    throw new Error('tolong masukkan username')
}

module.exports.getAuth=getAuth