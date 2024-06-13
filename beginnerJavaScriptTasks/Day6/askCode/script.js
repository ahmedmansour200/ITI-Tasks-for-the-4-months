var input =  document.querySelector(".input");
var clear = document.querySelector("button");
input.addEventListener("keydown" ,function(e){
    alert(`${e.key} , ${e.keyCode}`);  
});

clear.addEventListener("click" , function(){
    input.value = null;
})
