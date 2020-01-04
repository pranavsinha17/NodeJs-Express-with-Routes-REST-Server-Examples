const express=require('express');
const http=require('http');
const morgan=require('morgan');
const bodyPasrer=require('body-parser');

const app=express();
app.use(bodyPasrer.json());
app.use(morgan("dev"));
app.use(express.static(__dirname+"/public"));
const dishRoute=require("./routes/dishRoutes.js");
app.use("/dishes",dishRoute);

app.all("/dishes/:dishId",(req,res,next)=>{
    res.statusCode=200;
    next();
    });
    app.get("/dishes/:dishId",(req,res,next)=>{
        res.statusCode=200;
        res.end("Will send the dish detail of dish "+ req.params.dishId);
    });
    app.post("/dishes/:dishId",(req,res,next)=>{
     res.statusCode=403;
     res.end("Post Operations are not correct");
    });
    app.put("/dishes/:dishId",(req,res,next)=>{
          res.statusCode=200;
          res.end("Updated query will be on "+ req.params.dishId+
          "\n The dish will be"+req.body.name+"and details "+req.body.description);
    }
          );
    app.delete("/dishes/:dishId",(req,res,next)=>{
    res.statusCode=200;
    res.end("Deletion operation perform on "+ req.params.dishId);
    });
app.use((req,res,next)=>{
    console.log(req.header);
    res.statusCode=200;
    res.end("<html><body><h1>This is Express Server</h1></body></html>");
});
const server=http.createServer(app);
server.listen(3000,()=>console.log("Liosten to Port 3000"));