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

const sendMessage = async () => {
  const { value } = await cookieStore.get("username")
  socket.emit("message", {
    username: value,
    message: handleMessage().getMessage()
  });
}

sendButton.addEventListener("click", async () => await sendMessage())
messageInput.addEventListener("keypress", async (e) => {
  if (e.key === "Enter") await sendMessage()
})

socket.on("message", (ioMessage) => {
  const messageMarkup = `
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
  `
  allMessages.innerHTML += messageMarkup;

  handleMessage().clearMessage();
});