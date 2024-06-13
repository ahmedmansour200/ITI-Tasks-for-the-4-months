var myName = document.getElementById("name");
var address = document.getElementById("address");
var email = document.getElementById("email");
var mobile = document.getElementById("mobile");
var form = document.getElementById("registrationForm");

var spanName = document.getElementsByTagName("span")[0];
var spanEmail = document.getElementsByTagName("span")[1];
var spanMobile = document.getElementsByTagName("span")[2];
var spanAddress = document.getElementsByTagName("span")[3];

function validationName() {
    if (myName.value == "" || isFinite(myName.value)) {
        spanName.innerText = "Please enter a valid name.";
        return false;
    }
    spanName.innerText = "";
    return true;
}

function validationAddress() {
    if (address.value == "" || isFinite(address.value)) {
        spanAddress.innerText = "Please enter a valid address.";
        return false;
    }
    spanAddress.innerText = "";
    return true;
}

function validationEmail() {
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.value == "" || !emailPattern.test(email.value)) {
        spanEmail.innerText = "Please enter a valid email format (e.g., ahmed@gmail.com).";
        return false;
    }
    spanEmail.innerText = "";
    return true;
}

function validationMobile() {
    if (mobile.value == "" || isNaN(mobile.value)) {
        spanMobile.innerText = "Please enter a valid mobile number.";
        return false;
    }
    spanMobile.innerText = "";
    return true;
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    validationName();
    validationEmail();
    validationAddress();
    validationMobile();
    if (validationName() && validationAddress() && validationEmail() && validationMobile()) {
        var formData = new FormData(form);
        var queryString = new URLSearchParams(formData).toString();
        window.location.href = `index2.html?${queryString}`;
    }
});

// alert 30 seconds
var timeout = setTimeout(function () {
    alert('You have been inactive for 30 seconds.');
}, 30000);

form.addEventListener('input', function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        alert('You have been inactive for 30 seconds.');
    }, 30000);
});