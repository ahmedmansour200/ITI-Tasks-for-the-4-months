var myName = document.getElementsByTagName("input")[0];
var email = document.getElementsByTagName("input")[1];
var form = document.querySelector("form");
var checkbox = document.querySelector("#checkbox");
console.log(checkbox.value);

// form.addEventListener('submit' , function(){
//     localStorage.setItem('myName',myName.value);
//     localStorage.setItem('email',email.value);

// })

// console.log(localStorage.getItem('myName') , localStorage.getItem('email'));

form.addEventListener("submit", function () {
    if (checkbox.checked){

        localStorage.setItem('myName',myName.value);
        localStorage.setItem('email',email.value);
    } 

});
        