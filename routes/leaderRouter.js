const express=require('express');
const bodyParser=require('body-parser');
const leaderRoute=express.Router();
leaderRoute.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    next();
})
.get((req,res,next)=>{
    res.statusCode=200;
    res.end("Will send you all the leaders lists ");
})
.post((req,res,next)=>{
    res.statusCode=200;
    res.end("Will add the leader list with"+req.body.name+" and increment"+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end("Put operations are not supported");
})
.delete((req,res,next)=>{
    res.statusCode=200;
    res.end("Will delete all the leaders in the list");
});

leaderRoute.route("/:leaderId")
.all((req,res,next)=>{
    res.statusCode=200;
    next();
    })
    .get((req,res,next)=>{
        res.statusCode=200;
        res.end("Will send the leader detail of id "+ req.params.leaderId);
    })
    .post((req,res,next)=>{
     res.statusCode=403;
     res.end("Post Operations invalid");
    })
    .put((req,res,next)=>{
          res.statusCode=200;
          res.end("Updated query will be on "+ req.params.leaderId+
          "\n The name will be"+req.body.name+"and increment "+req.body.description);
    }
          )
    .delete((req,res,next)=>{
    res.statusCode=200;
    res.end("Deletion operation perform on id"+ req.params.leaderId);
    });
    module.exports=leaderRoute;