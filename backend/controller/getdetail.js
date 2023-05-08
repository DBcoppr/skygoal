import { usermodel } from "../models/Muser.js"

export const Details =async(req,res)=>{
    const {email}=req.authData.user
    try{
        const user=await usermodel.find({email:email})
        res.status(200).send(user)
    }
    catch(error){
        res.status(500).send("something went wrong...")
    }

}