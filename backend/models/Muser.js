import mongoose from "mongoose";
const schema=mongoose.Schema({
name:{type:String,required:"name of user necessary"},
email:{type:String,required:"name of email necessary"},
password:{type:String,required:true},
})
export const usermodel =  mongoose.model("user",schema)