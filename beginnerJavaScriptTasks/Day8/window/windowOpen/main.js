var openPag = document.querySelector("button");

// function openNewPag(){
//     window.open()
// }
openPag.addEventListener("click", function(){
    var closeThePag = open("indexpag2.html" ,"The Pag 2" ,"width=500,height=500",1000);
    setTimeout(function(){
        closeThePag.close()
    },5000)
})