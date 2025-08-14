const socket = io()

const sendButton = document.querySelector("#send-message")
const allMessages = document.querySelector("#all-messages")
const messageInput = document.querySelector("#message")

const handleMessage = () => {
  return {
    getMessage: () => messageInput.value,
    clearMessage: () => messageInput.value = ""
  }
}

const sendMessage = () => {
  socket.emit("message", handleMessage().getMessage());
  handleMessage().clearMessage();
}

sendButton.addEventListener("click", sendMessage)
messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage()
})

socket.on("message", (ioMessage) => {
  const messageMarkup = document.createRange().createContextualFragment(/*html*/`
    <div class="message">
      <div class="image-container">
        <img src="/images/michi.jpeg" alt="michi">
      </div>
      <div class="message-body">
        <div class="user-info">
          <span class="username">${ioMessage.username}</span>
          <span class="time">${new Date().toLocaleString()}</span>
        </div>
        <p>${ioMessage.message}</p>
      </div>
    </div>
  `)
  allMessages.append(messageMarkup);
});