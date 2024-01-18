const express=require('express')
const path=require('path')
const PORT=process.env.PORT||5000
const HOST=process.env.HOST

const app=express()

console.log("Deploying app");

app.use('/',express.static(path.join(__dirname,'angular')))

app.get('',(res,req)=>{
    res.sendFile(path.join(__dirname,'angular','index.html'))
})

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
})
