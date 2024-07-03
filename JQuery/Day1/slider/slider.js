
var arrayImag =[ "images/1.jpg" , "images/2.jpg" , "./images/3.jpg" , "./images/4.jpg" ,
  "./images/5.jpg" ,"./images/6.jpg"
]
let index = 0;
$("img").on("click", function() {
  var src = $(this).attr("src");
  $(".imag").attr("src", src);
  $(".center").show();
  index = arrayImag.indexOf(src);
});

$(".next").on("click", function() {
  index = (index + 1) % arrayImag.length;
  var src = arrayImag[index];
  $(".imag").attr("src", src);
});

$(".prev").on("click", function() {
  index = (index - 1 + arrayImag.length) % arrayImag.length;
  var src = arrayImag[index];
  $(".imag").attr("src", src);
});

$(".close").on("click", function() {
  $(".center").hide();
});