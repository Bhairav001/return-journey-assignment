const express = require("express")
const { userModel } = require("../model/User.model")
const jsonwebtoken = require("jsonwebtoken")
const userRouter = express.Router()


userRouter.post("/register",async(req,res)=>{
    const payload = (req.body)
    try {
        const user = new userModel(payload)
        await user.save()
        console.log({"msg":"new user registered successfully done!"})
        res.send({"msg":"new user registered successfully done!"})
    } catch (error) {
        console.log({"msg":error.message})
        res.send({"msg":error.message})
    }
})


userRouter.post("/login",async(req,res)=>{
    const {email,pass} =req.body;
    try {
        const user = await userModel.find({email,pass});
        if(user.length>0){
            const token = jsonwebtoken.sign({course:"backend"},"masai")
            console.log({"msg":"user login successfully done!","token":token})
            res.send({"msg":"user login successfully done!","token":token})
        }else{
            console.log({"msg":"wrong creditials!"})
            res.send({"msg":"wrong creditails!"})
        }
    } catch (error) {
        console.log({"msg":error.message})
        res.send({"msg":error.message})
    }
})


module.exports={
    userRouter
}