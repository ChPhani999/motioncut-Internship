function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple validation
    if (name === "" || email === "" || username === "" || password === "") {
        alert("All fields must be filled out");
        return;
    }

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return;
    }

    // Password strength validation (simple for demonstration)
    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    // Display confirmation message
    displayConfirmation();
}

function displayConfirmation() {
    var form = document.getElementById("registrationForm");
    form.style.display = "none";

    var confirmation = document.getElementById("confirmation");
    confirmation.innerHTML = "<h3>Registration successful!</h3>";
    confirmation.style.display = "block";
}
