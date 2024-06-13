var openPag = document.querySelector("button");
var h1 = document.querySelector("h1");
// var body = document.querySelector("body");




openPag.addEventListener("click", function (e) {
    var x = setInterval(function () {
        var second = new Date().getSeconds();
        var mint = new Date().getMinutes();
        var hour = new Date().getHours();
        h1.innerText = `clock : ${hour} : ${mint} : ${second}`;

    }, 1000)

    window.addEventListener("keyup", function (e) {
        console.log(e.key);
        if (e.altKey && e.key == "w") {

            clearInterval(x);
        }
    });

})


