const jwt  =  require("jsonwebtoken");

module.exports = {
    checkToken:(req,res,next)=>{
        let token  =  req.get("authorization");
        if(token){
            // Remove bearer from string 
            token = token.slice(7);
            jwt.verify(token,process.env.JSON_TOKEN,(err,decoded)=>{
                if(err){
                    
                }
            })

        }
    }
}