require("dotenv").config();
const express = require("express");
const app =  express();

// app.get('/api',(req,res)=>{
//     res.json({
//         success:1,
//         message:"This is rest apis working"
//     })

// })

const userRouter =  require("./api/users/user.router");

app.use("/api/users",userRouter);
app.listen(process.env.APP_PORT,()=>{
    console.log("Server Listen",process.env.APP_PORT);
})