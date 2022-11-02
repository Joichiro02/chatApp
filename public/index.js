const socket = io();
const chatContainer = document.querySelector(".chat-container");
const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message");
const roomForm = document.getElementById("room-form");

socket.on("connect", () => {
    const messageSpan = document.createElement("span");
    messageSpan.textContent = `You connect with ID: ${socket.id}`;
    chatContainer.append(messageSpan);
});

socket.on("chat", (message) => {
    const messageSpan = document.createElement("span");
    messageSpan.classList.add("message-receiver")
    messageSpan.textContent = message.message;
    chatContainer.append(messageSpan);
});

messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    socket.emit("chat", { message: messageInput.value });
    const messageSpan = document.createElement("span");
    messageSpan.classList.add("message-sender")
    messageSpan.textContent = messageInput.value;
    chatContainer.append(messageSpan);
    messageInput.value = "";
});