function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === "admin" && password === "admin123") {
        alert("Login successful!");
        window.location = "http://127.0.0.1:5500/login.html"; // Redirect to thank you page
        return false;
    } else {
        alert("Invalid credentials. Please try again.");
        return false;
    }
}