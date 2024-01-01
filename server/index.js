const { Server } = require("socket.io");

const io = new Server(process.env.PORT | 8000);

io.on('connection',(socket)=>{
    console.log("Socket Connected - ",socket.id);
})