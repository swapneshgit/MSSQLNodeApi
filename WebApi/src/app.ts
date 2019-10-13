import express from 'express';
const app=express();

app.get('/',(req,res,next)=>{
    res.status(200).json({"message":"API Running"});
})

app.listen(5000,()=>{console.log("Api start listning")});