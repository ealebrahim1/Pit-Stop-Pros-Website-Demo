// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Create a message object
    const newMessage = { name, email, message };

    // Get existing messages from localStorage or initialize an empty array
    const messages = JSON.parse(localStorage.getItem("messages")) || [];

    // Add the new message to the array
    messages.push(newMessage);

    // Save the updated array back to localStorage
    localStorage.setItem("messages", JSON.stringify(messages));

    // Show confirmation message
    const confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.style.display = "block";

    // Clear the form
    this.reset();

    // Hide the confirmation message after 3 seconds
    setTimeout(() => {
        confirmationMessage.style.display = "none";
    }, 3000);

    // Update the displayed messages
    displayMessages();
});

// Display messages from localStorage
function displayMessages() {
    const messagesList = document.getElementById("messages-list");
    const messages = JSON.parse(localStorage.getItem("messages")) || [];

    // Clear the list
    messagesList.innerHTML = "";

    // Add each message to the list
    messages.forEach((message) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>Name:</strong> ${message.name}<br>
            <strong>Email:</strong> ${message.email}<br>
            <strong>Message:</strong> ${message.message}
        `;
        listItem.style.borderBottom = "1px solid #ddd";
        listItem.style.padding = "10px";
        messagesList.appendChild(listItem);
    });
}

// Load messages when the page loads
window.onload = displayMessages;
