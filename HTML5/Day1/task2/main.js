var inputRed = document.getElementById("red");
var inputGreen = document.getElementById("green");
var inputBlue = document.getElementById("blue");
var h1 = document.getElementsByTagName("h1")[0];

// console.log(inputBlue,inputGreen,inputRed.value);

inputRed.addEventListener('input' ,function(){

    h1.style.color = `rgb(${inputRed.value},${inputGreen.value},${inputBlue.value})`;
})
inputGreen.addEventListener('input' ,function(){

    h1.style.color = `rgb(${inputRed.value},${inputGreen.value},${inputBlue.value})`;
})
inputBlue.addEventListener('input' ,function(){

    h1.style.color = `rgb(${inputRed.value},${inputGreen.value},${inputBlue.value})`;
})