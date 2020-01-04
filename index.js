const express=require('express');
const http=require('http');
const morgan=require('morgan');
const app=express();
app.use(morgan("dev"));
app.use(express.static(__dirname+"/public"));
app.use((req,res,next)=>{
    console.log(req.header);
    res.statusCode=200;
    res.end("<html><body><h1>This is Express Server</h1></body></html>");
});
const server=http.createServer(app);
server.listen(3000,()=>console.log("Liosten to Port 3000"));