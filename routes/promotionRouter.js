const express=require('express');
const bodyParser=require('body-parser');
const promotionRoute=express.Router();
promotionRoute.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    next();
})
.get((req,res,next)=>{
    res.statusCode=200;
    res.end("Will send you all the promotion lists ");
})
.post((req,res,next)=>{
    res.statusCode=200;
    res.end("Will add the promotion list with"+req.body.name+" and increment"+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end("Put operations are not supported");
})
.delete((req,res,next)=>{
    res.statusCode=200;
    res.end("Will delete all the promotions in the list");
});

promotionRoute.route("/:promoId")
.all((req,res,next)=>{
    res.statusCode=200;
    next();
    })
    .get((req,res,next)=>{
        res.statusCode=200;
        res.end("Will send the promotion detail of id "+ req.params.promoId);
    })
    .post((req,res,next)=>{
     res.statusCode=403;
     res.end("Post Operations invalid");
    })
    .put((req,res,next)=>{
          res.statusCode=200;
          res.end("Updated query will be on "+ req.params.promoId+
          "\n The name will be"+req.body.name+"and increment "+req.body.description);
    }
          )
    .delete((req,res,next)=>{
    res.statusCode=200;
    res.end("Deletion operation perform on id"+ req.params.promoId);
    });
    module.exports=promotionRoute;