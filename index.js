const http = require("http");
const url = require("url");
const fs = require("fs")
http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if(parsedUrl.pathname === "/"){
        fs.readFile("./index.html", (err, data)=>{
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(data);
        })
    }
    else if(parsedUrl.pathname === "/about"){
        fs.readFile("./about.html", (err, data)=>{
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(data);
        })
    }
    else if(parsedUrl.pathname === "/contact"){
        fs.readFile("./contact-me.html", (err, data)=>{
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(data);
        })
    }
    else{
        fs.readFile("./404.html", (err, data)=>{
            res.writeHead(404, {"Content-Type":"text/html"});
            res.end(data);
        })
    }
}).listen(8000, ()=> console.log("Server Running on port 8000"));