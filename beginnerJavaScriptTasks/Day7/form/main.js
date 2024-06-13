var myName = document.getElementsByTagName("input")[0];
var age = document.getElementsByTagName("input")[1];
var email = document.getElementsByTagName("input")[2];

var add = document.querySelectorAll("input[type='button']")[0];
var clear = document.querySelectorAll("input[type='button']")[1];

var spanName = document.getElementsByTagName("span")[0];
var spanAge = document.getElementsByTagName("span")[1];
var spanEmail = document.getElementsByTagName("span")[2];


var styleTable = document.querySelector("table");
var bodyTable = document.querySelector("tbody");

styleTable.style.display = "none";

add.addEventListener("click", function () {
    validationName();
    validationAge();
    validationEmail();

    if (validationName() && validationAge() && validationEmail()) {

        var trElemant = document.createElement("tr");
        bodyTable.append(trElemant);
        trElemant.innerHTML = `<tr><td>${myName.value}</td><td>${age.value}</td></tr><td>${email.value}</td></tr>`;
        
         styleTable.style.display = "inline-table";
    
    }
     
})

// validation name
function validationName() {
    if (myName.value == "" || isFinite(myName.value)) {
        spanName.innerText = "please enter the text";
        return false;
    }
    return true
}
// validation age
function validationAge() {
    if (age.value == "" || isNaN(age.value)) {
        spanAge.innerText = "please enter the Age";
        return false
    }
    return true
}

// // validation email
// var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// return emailPattern.test(email);
function validationEmail() {
    if (email.value == "" || !(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value))) {
        spanEmail.innerText = "please enter format ahmed@gmail.com";
        return false
    }
    return true
}

// ////////// clear
clear.addEventListener("click", function () {
    myName.value = "";
    age.value = "";
    email.value = "";
    spanName.innerText ="";
    spanEmail.innerText ="";
    spanAge.innerText ="";
})