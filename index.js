import express from "express"
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js"
import tourRouter from "./routes/tour.js"

const app=express()
app.use(morgan("dev"))
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})
app.use("/users",userRouter)
app.use("/tour",tourRouter)


const MONGODB_URL="mongodb+srv://chandan:Chandan123@cluster0.bzg0nzi.mongodb.net/tour_db?retryWrites=true&w=majority"

const port= 5000 
mongoose.connect(MONGODB_URL).then(()=>{
    app.listen(port,()=>{
        console.log("listing on port 5000")
    })
}).catch(err=>{
    console.log("did not connect",err)
})

app.get("/",(req,res)=>{
    res.send("hello express");
});

//mongodb+srv://chandan:<password>@cluster0.bzg0nzi.mongodb.net/?retryWrites=true&w=majority
//password=Chandan123

