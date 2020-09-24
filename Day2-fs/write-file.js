const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{ContentType: "text/plain"});
    let content = fs.readFileSync('sample.txt');
   // let resData = fs.writeFileSync('sample1.txt',content);
    fs.writeFile('sample1.txt',content,(err,data) => {
        if(err){
            console.log(err);
            res.end();
        }
        res.end('file written');
    })
});

server.listen(3000,'127.0.0.1',(err,data)=>{
    console.log(`server running on port ${3000}`);
});

