const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{ContentType: "text/plain"});
    console.log("server up");
    res.end('Hello World');
});

server.listen(3000,'127.0.0.1',(err,data)=>{
    console.log(`server running on port ${3000}`);
});

