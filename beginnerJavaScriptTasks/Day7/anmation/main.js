var dives = document.querySelectorAll("div");
var header = document.querySelector("header");
var count = 0;

header.addEventListener("mouseleave", randomColor)


function randomColor() {
    var myStop = setInterval(function () {

        dives[count].style.backgroundColor = "aqua";
        // 
        count = (count + 1) % (dives.length);
        dives[count].style.backgroundColor = "red";
        // console.log(i);
    }, 1000);
    header.addEventListener("mouseover", function () {
        clearInterval(myStop);
    })
}