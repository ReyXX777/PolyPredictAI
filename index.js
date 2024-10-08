// Function to toggle registration and login forms
function showRegistration() {
    document.getElementById("registration-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
}

function showLogin() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("registration-form").style.display = "none";
}

// Function to download CSV
function downloadCSV() {
    const link = document.createElement('a');
    link.href = 'C:/Users/User/Desktop/PolyPredictAI/prompt-target.csv'; // Adjust the file path
    link.download = 'data.csv'; // Name of the file to download
    link.click();
}

// Function to toggle FAQ items
function toggleFAQ(element) {
    var answer = element.nextElementSibling;
    answer.style.display = answer.style.display === "none" ? "block" : "none";
}

// Function to start chat
function startChat() {
    alert("Connecting you to a support representative...");
    // Connect to live chat API or system.
}
