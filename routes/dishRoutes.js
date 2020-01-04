const express=require('express');
const bodyParser=require('body-parser');
const dishRoute=express.Router();
dishRoute.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    next();
})
.get((req,res,next)=>{
    res.statusCode=200;
    res.end("Will send you all the dishes ");
})
.post((req,res,next)=>{
    res.statusCode=200;
    res.end("Will add the dish with"+req.body.name+" and detail"+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end("Put operations are not supported");
})
.delete((req,res,next)=>{
    res.statusCode=200;
    res.end("Will delete all the dishes");
});
module.exports=dishRoute;
