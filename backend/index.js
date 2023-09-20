const express = require("express")
const dotenv = require("dotenv")
const { connection } = require("./config/db")
const { userRouter } = require("./routes/User.routes")
dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("HomePage")
})


//  

app.use("/users",userRouter)
app.listen(8080,async()=>{
    try {
        await connection
        console.log(`connect to url; ${process.env.mongoURL}`)
    } catch (error) {
        console.log(error)
    }
    console.log(`Server is running on port ${process.env.PORT}`)
})