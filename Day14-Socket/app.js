const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
server.listen(3000);

app.get('/index',(req,res,next)=>{
    res.sendFile(__dirname+'/index.html');
});

app.get('/admin',(req,res,next)=>{
    res.sendFile(__dirname+'/admin.html');
});

io.on('connection',function(socket){
    console.log('connected');
    socket.on('post',function(data){
        console.log("data received"+ JSON.stringify(data));
        io.sockets.emit('next',data);
    })
})