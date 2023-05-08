import jwt from "jsonwebtoken"

const authorization = (req,res,next) => {
   
    const authHeader=req.headers["authorization"]
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        return res.sendStatus(401);
      }
    else{
    jwt.verify(token,"james_bond",(err,user)=>{
       if(err){
        res.send(err)
       }
       else{
          req.authData = {user};
       }
        next();
    })
}
}


export default authorization