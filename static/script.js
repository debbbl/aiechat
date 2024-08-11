document.addEventListener('DOMContentLoaded', function() {
    // Toggle chatbox visibility
    document.getElementById('menuButton').addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('sidebar-open');
    });

    // Show/Hide chat widget
    document.getElementById('sendButton').addEventListener('click', function() {
        sendMessage();
        document.getElementById('userInput').value = ''; // Clear the input field
        document.getElementById('sendButton').classList.remove('active'); // Disable the send button
    });

    // Send message on Enter key
    document.getElementById('userInput').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendMessage();
            document.getElementById('userInput').value = ''; // Clear the input field
            document.getElementById('sendButton').classList.remove('active'); // Disable the send button
        }
    });

    // Adjust send button state based on input
    document.getElementById('userInput').addEventListener('input', function() {
        const userInput = document.getElementById('userInput').value.trim();
        const sendButton = document.getElementById('sendButton');
        if (userInput.length > 0) {
            sendButton.classList.add('active');
            sendButton.disabled = false;
        } else {
            sendButton.classList.remove('active');
            sendButton.disabled = true;
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        // Call sendMessage to send the greeting message when the page loads
        sendMessage('Hi, how can I help you?');
    });

    async function sendMessage(message = null) {
        const userInput = message || document.getElementById('userInput').value.trim();
        if (!userInput) return;
    
        // Display user message
        const messages = document.getElementById('messages');
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user');
        userMessage.innerHTML = `<div class="content">${userInput}</div>`;
        messages.appendChild(userMessage);
    
        // Hide FAQ buttons
        document.getElementById('faqButtons').style.display = 'none';
    
        // Send user message to Rasa server
        const response = await fetch('http://localhost:5005/webhooks/rest/webhook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userInput })
        });
    
        const data = await response.json();
    
        // Display bot response
        data.forEach((msg) => {
            const botMessage = document.createElement('div');
            botMessage.classList.add('message', 'bot');
            botMessage.innerHTML = `<img src="../static/images/bot-profile.png" alt="Bot"><div class="content">${msg.text}</div>`;
            messages.appendChild(botMessage);
        });
    
        // Clear input and disable send button
        document.getElementById('userInput').value = '';
        document.getElementById('sendButton').classList.remove('active');
    
        // Scroll to the bottom of the messages
        messages.scrollTop = messages.scrollHeight;
    }
    

    // FAQ button click handling
    const faqButtons = document.querySelectorAll(".faq-button");
    faqButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const message = event.target.textContent;
            sendMessage(message);
        });
    });
});
