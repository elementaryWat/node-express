const express= require("express");
const http= require("http");
const morgan=require("morgan");
const bodyParser=require("body-parser");

const host="localhost";
const port=3000;

const app=express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.all("/dishes",(req,res,next)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","text/plain");
    next();
});
app.get("/dishes",(req,res)=>{
    res.end("Se enviaran todos los platos como respuesta");
});
app.post("/dishes",(req,res)=>{
    res.end("Se creara un nuevo plato llamado:"+req.body.name+" con los datos: "+req.body.description);
});
app.put("/dishes",(req,res)=>{
    res.statusCode=403;
    res.end("Operacion no soportada para /dishes");
});
app.delete("/dishes",(req,res)=>{
    res.end("Se eliminaran todos los platos");
});

app.get("/dishes/:dishId",(req,res)=>{
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
});
app.use(express.static(__dirname+"/public"));
app.use((req,res,next)=>{
    res.statusCode=404;
    res.setHeader("Content-Type","text/html");
    res.end("<html><body><h2>No se ha encontrado la pagina</h2></body></html>");
});

const server=http.createServer(app);

server.listen(port, host, ()=>{
    console.log(`Server running at http://${host}:${port}`);
})