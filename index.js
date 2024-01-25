import express from "express";
import qr from "qr-image";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/result.png",(req,res)=>{
    res.sendFile(__dirname+"/result.png");
});

app.get("/style.css",(req,res)=>{
    res.sendFile(__dirname+"/public/style.css");
});

app.post("/result",(req,res)=>{
    var link = req.body.link;
    var qr_svg = qr.image(link, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('result.png'));
    res.sendFile(__dirname+"/public/result.html");
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
});

app.listen(port,()=>{
    console.log(`running server on ${port} port`)
});