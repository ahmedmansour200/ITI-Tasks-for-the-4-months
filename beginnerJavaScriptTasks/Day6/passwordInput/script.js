var input =  document.querySelector(".input");
var iconPs = document.querySelector(".toggle-password");

iconPs.addEventListener("click",function() {

    var icon = input.nextElementSibling;

    if (input.type === "password") {
        input.type = "text";
        icon.innerHTML = "&#128064;";
    } else {
        input.type = "password";
        icon.innerHTML = "&#128065;";
    }
} )
