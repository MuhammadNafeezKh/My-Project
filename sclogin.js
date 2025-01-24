function validateLogin(event) {
    event.preventDefault();
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const validEmail = "SMKTIBAZMA@gmail.com";
    const validPassword = "pyhton123";
    const messageDisplay = document.getElementById("message");
    if (email === validEmail && password === validPassword) {
        messageDisplay.textContent = "Login successful!";
        messageDisplay.style.color = "green";
        
        setTimeout(() => {
            window.location.href = "depresi.html"; 
        }, 1000);
    } else {
        messageDisplay.textContent = "Invalid email or password. Please try again.";
        messageDisplay.style.color = "red";
    }
}