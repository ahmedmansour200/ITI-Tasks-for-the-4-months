// select imag

var myImg = document.querySelector("img");
myImg.style.width = "150px"
var myHeader = document.getElementById("header");
myHeader.style.display ="flex"; 
myHeader.style.justifyContent ="flex-end";

//  center elemant
var navigation = document.getElementById("navigation");
navigation.style.display ="flex";
navigation.style.justifyContent ="center";
document.getElementById("nav").style.listStyle ="circle";

// ////
// var copeImag = document.createElement("div");
// document.body.append(copeImag);
// copeImag.innerHTML = `<img src ='${myImg.getAttribute("src")}'></img>`;
// copeImag.style.width="150px";

var copyImgContainer = document.createElement("div");
document.body.append(copyImgContainer);
copyImgContainer.innerHTML = `<img width='150px' src ='${myImg.getAttribute("src")}' alt='Copied Image'></img>`;
copyImgContainer.style.display="flex";
copyImgContainer.style.justifyContent="flex-start"



//copyImgContainer.style.width = "150px";
// copyImgContainer.append(myImg.cloneNode(true));