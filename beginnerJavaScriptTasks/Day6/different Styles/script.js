var p = document.getElementById("PAR");
var trTeble = document.querySelector("tr");

// trTeble.addEventListener("click", function(e){
//     console.log(e.button);
//     console.log(e.target);
// });

function ChangeFont(x){
    p.style.fontFamily = x;
}
function ChangeAlign(x){
    p.style.textAlign = x;
}
function ChangeHeight(x){
    p.style.lineHeight = x;
}
function ChangeLSpace(x){
    p.style.letterSpacing = x;
}
function ChangeIndent(x){
    p.style.textIndent = x;
}
function ChangeTransform(x){
    p.style.textTransform = x;
}
function ChangeDecorate(x){
    p.style.textDecoration = x;
}
function ChangeBorder(x){
    p.style.border = x ;
}
function ChangeBorderColor(x){
    p.style.borderColor = x;
}

