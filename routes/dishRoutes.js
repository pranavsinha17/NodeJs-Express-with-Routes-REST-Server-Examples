const express=require('express');
const bodyParser=require('body-parser');
const Dishes = require('../models/dishes');
const dishRoute=express.Router();
dishRoute.use(bodyParser.json());
dishRoute.route('/')
.get((req,res,next) => {
    Dishes.find({})
    .then((dishes) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dishes);
    }, (err) => next(err))
    .catch((err) => next(err));
});
dishRoute.route('/:dishId')
.all((req,res,next)=>{
    res.statusCode=200;
    next();
    })
    .get((req,res,next)=>{
        res.statusCode=200;
        res.end("Will send the dish detail of dish "+ req.params.dishId);
    })
    .post((req,res,next)=>{
     res.statusCode=403;
     res.end("Post Operations are not correct");
    })
    .put((req,res,next)=>{
          res.statusCode=200;
          res.end("Updated query will be on "+ req.params.dishId+
          "\n The dish will be"+req.body.name+"and details "+req.body.description);
    }
          )
    .delete((req,res,next)=>{
    res.statusCode=200;
    res.end("Deletion operation perform on "+ req.params.dishId);
    });
    
module.exports=dishRoute;
