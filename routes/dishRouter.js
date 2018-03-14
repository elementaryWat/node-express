const express=require("express");
const bodyParser=require("body-parser");

const dishRouter=express.Router();

dishRouter.use(bodyParser.json());
dishRouter.route("/")
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","text/plain");
    next();
}).get((req,res)=>{
    res.end("Se enviaran todos los platos como respuesta");
}).post((req,res)=>{
    res.end("Se creara un nuevo plato llamado:"+req.body.name+" con los datos: "+req.body.description);
}).put((req,res)=>{
    res.statusCode=403;
    res.end("Operacion no soportada para /dishes");
}).delete((req,res)=>{
    res.end("Se eliminaran todos los platos");
});

/* app.get("/dishes/:dishId",(req,res)=>{
    res.end("Enviando el plato:"+req.params.dishId+"\n");
});
app.post("/dishes/:dishId",(req,res)=>{
    res.statusCode=403;
    res.end("Operacion no soportada para /dishes/"+req.params.dishId);
});
app.put("/dishes/:dishId",(req,res)=>{
    res.write("Actualizando el plato:"+req.params.dishId+"/n");
    res.end("Los nuevos datos son Nombre:"+req.body.name+" Descripcion:"+req.body.description);
});
app.delete("/dishes/:dishId",(req,res)=>{
    res.end("Eliminando el plato:"+req.params.dishId);
}); */

module.exports=dishRouter;