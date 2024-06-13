// task 3

alert("Welcom");


    // Function to validate name
    function validateName(name) {
        return /^[a-zA-Z]+$/.test(name);
    }

    // Function to validate phone number
    function validatePhoneNumber(phoneNumber) {
        return /^[0-9]{8}$/.test(phoneNumber);
    }

    // Function to validate mobile number
    function validateMobileNumber(mobileNumber) {
        return /^(010|011|012)[0-9]{8}$/.test(mobileNumber);
    }

    // Function to validate email
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Get user information
    var userName = prompt("Enter your name:");
    while (!validateName(userName)) {
        userName = prompt("Invalid input. Enter your name (characters only):");
    }

    var phoneNumber = prompt("Enter your phone number (8 digits):");
    while (!validatePhoneNumber(phoneNumber)) {
        phoneNumber = prompt("Invalid input. Enter your phone number (8 digits):");
    }

    var mobileNumber = prompt("Enter your mobile number (11 digits, starts with 010, 011, or 012):");
    while (!validateMobileNumber(mobileNumber)) {
        mobileNumber = prompt("Invalid input. Enter your mobile number (11 digits, starts with 010, 011, or 012):");
    }

    var email = prompt("Enter your email:");
    while (!validateEmail(email)) {
        email = prompt("Invalid input. Enter your email (e.g., abc@123.com):");
    }

    // Display welcoming message
    document.write(`<h1>Welcome, ${userName}</h1>`);
    document.write(`<p>Phone Number: ${phoneNumber}</p>`);
    document.write(`<p>Mobile Number: ${mobileNumber}</p>`);
    document.write(`<p>Email: ${email}</p>`);

