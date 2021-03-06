const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{ContentType: "text/plain"});
    let content = 'New text';
    let resData = fs.unlinkSync('sample2.txt');
    fs.unlink('sample2.txt',(err,data) => {
        if(err){
            console.log(err);
            res.end();
        }
        res.end('file deleted');
    })
});

server.listen(3000,'127.0.0.1',(err,data)=>{
    console.log(`server running on port ${3000}`);
});

