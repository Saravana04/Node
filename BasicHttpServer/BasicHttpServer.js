var http = require('http');
var fs = require('fs');
var hostname = "127.0.0.1";
var port = "3000";
var server = http.createServer((req,res)=>{
    fs.readFile('index.html',function(err,dataFromTheFile){
        if(!err){
            res.writeHead(200,{"Content-Type":"text/html"})
            res.end(dataFromTheFile);
        }
    })
});
server.listen(port,hostname,()=>{
    console.log(`server running at ${hostname}:${port}`)
});