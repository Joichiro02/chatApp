const socket = io();

socket.emit("chat", { message: "Hello there" })