import express from "express"
import { Details } from "../controller/getdetail.js"
import { Login, Signup } from "../controller/auth.js"
import authorization from "../middleware/authorization.js"
export const userRoutes=express.Router()
userRoutes.post("/login",Login)
userRoutes.post("/signup",Signup)
userRoutes.get("/details",authorization, Details)