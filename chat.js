document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = document.getElementById("chat-messages");
    const chatInput = document.getElementById("chat-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", sendMessage);

    chatInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

    chatMessages.addEventListener("click", function(e) {
        const messageDiv = e.target.closest(".message");
        if (messageDiv && e.target.classList.contains("delete")) {
            messageDiv.remove();
        }
    });

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message !== "") {
            appendMessage("You", message);
            chatInput.value = "";
        }
    }

    function appendMessage(sender, message) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        const time = new Date().toLocaleTimeString();
        const date = new Date().toLocaleDateString();
        messageDiv.innerHTML = `<div class="message-content"><span class="message-sender">${sender}:</span> ${message} <span class="message-time">${time}</span> <span class="message-date">${date}</span></div>`;
        messageDiv.innerHTML += `<button class="delete">Delete</button>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

});