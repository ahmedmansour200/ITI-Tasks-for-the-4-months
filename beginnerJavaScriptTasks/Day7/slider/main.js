var netImg = document.getElementsByTagName("button")[0];
var brImg = document.getElementsByTagName("button")[1];
var slideshow = document.getElementsByTagName("button")[2];
var stop = document.getElementsByTagName("button")[3];


// console.log(netImg,brImg);

var myImag = document.querySelector("img");

var arrayImag =[ "imag/1.jpg" , "imag/2.jpg" , "imag/3.jpg" , "imag/4.jpg" ,
    "imag/5.jpg" ,"imag/6.jpg" ,"imag/7.jpg" ,"imag/8.jpg" ,"imag/9.jpg" ,"imag/10.jpg"
]

var count = 0;
netImg.addEventListener("click" ,function(){
    if(count < arrayImag.length-1)
    {
        count++;
        myImag.src = arrayImag[count]

    }
})
brImg.addEventListener("click" ,function(){
    if(count > 0)
    {
        count--;
        myImag.src = arrayImag[count]

    }
})

slideshow.addEventListener("click",function(){
    // console.log( "fu" ,count);
    var x = setInterval(function(){
        if(count < arrayImag.length-1)
            {
                // console.log("if",count);
                count++;
                myImag.src = arrayImag[count]
        
            }else {
            // console.log("else if" ,count);
            count = 0
            myImag.src = arrayImag[count]
            // count++;
            }  
    },2000);
    stop.addEventListener("click",function(){
        clearInterval(x);
    })
    
})

