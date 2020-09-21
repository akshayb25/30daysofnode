const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{ContentType: "text/html"});
    fs.readFile('sample.html',(err,data)=>{
        if(err){
            res.end('Error in reading file');
        }
        res.end(data);
    })
}).listen(3000);

// server.listen(3000,'127.0.0.1',(err,data)=>{
//     console.log(`server running on port ${3000}`);
// });

