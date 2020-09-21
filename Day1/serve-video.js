const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    res.writeHead(200,{ContentType: "video/mp4"});
    let rstream = fs.createReadStream('sample.mp4');
    rstream.pipe(res);
}).listen(3000);

// server.listen(3000,'127.0.0.1',(err,data)=>{
//     console.log(`server running on port ${3000}`);
// });

