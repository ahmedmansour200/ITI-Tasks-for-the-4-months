var c = document.getElementsByTagName('canvas')[0];
var ctx = c.getContext('2d');
var color = document.getElementById("color");


var x = setInterval(function(){
        var x=parseInt(Math.random()*c.width);
        var y=parseInt(Math.random()*c.height);
        ctx.beginPath()
        ctx.arc(x,y,30,0,Math.PI*2);
        ctx.stroke();
},500)

document.querySelector("button").addEventListener('click',function(){
    clearInterval(x);
})


color.addEventListener('input' , function(){
    ctx.clearRect(0,0,400,400);
    ctx.strokeStyle=`${color.value}`;
})