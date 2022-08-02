const express = require("express");
const {Server} = require("socket.io");
const http = require("http");

const {addUser, removeUser, getUser, getUsersInRoom} = require("./users") 

const PORT =  process.env.PORT || 5000

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})
const router = require("./router");

app.use(router);

io.on("connection", (socket) => {
    
    socket.on('join', ({name, room}, cb) => {
        const {error, user} = addUser({id: socket.id, name, room});

        if(error) return cb (error);

        socket.emit('message', {user: 'admin', text: `${user.name}, welcome to room ${user.room}`})
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has joined`});

        socket.join(user.room);

        io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)})

        cb();
    });

    socket.on('sendMessage', (message, cb) => {
        const user = getUser(socket.id)

        io.to(user.room).emit('message', {user: user.name, text: message});
        io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)});

        cb();
    });

    socket.on("disconnect", () => {
        const user = removeUser(socket.id)

        if(user) {
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name} left`})
        }
    });
})

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
}); 