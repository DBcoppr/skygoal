import jwt from "jsonwebtoken"
import bp from "bcryptjs"
import { usermodel } from "../models/Muser.js"


export const Login =async(req,res)=>{
    const {email,password}=req.body
    try{
        const existingUser=await usermodel.findOne({email:email})
        if(!existingUser){
            res.status(404).send({message:"user doesnt exist"})
        }
        else{
            const passwordcrt=await bp.compare(password,existingUser.password)
            const token=jwt.sign({email:email},process.env.SECRET_KEY,{expiresIn:'1h'})
            if(!passwordcrt){
                res.status(404).send({message:"wrong password"})
            }
            else{
                res.status(200).send({token:token})
            }
        }
    }
    catch(error){
        res.status(500).send("something went wrong...")
    }

}

export const Signup=async(req,res)=>{
const {email,password,name}=req.body
console.log(req.body)
try {
    const existingUser=await usermodel.findOne({email:email})
    if(existingUser){
        res.status(404).send({message:"user already exist"})
    }
    else{
        const hashedPassword=await bp.hash(password,5)
        const newUser=await usermodel.create({name:name,email:email,password:hashedPassword})   
        res.status(200).send({message:"success"})
    }
} catch (error) {
    res.status(500).send("something went wrong signup...")
}
}
