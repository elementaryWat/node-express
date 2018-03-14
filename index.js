const express= require("express");
const http= require("http");
const morgan=require("morgan");
const bodyParser=require("body-parser");
const dishRouter=require("./routes/dishRouter");

const host="localhost";
const port=3000;

const app=express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/dishes",dishRouter);
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