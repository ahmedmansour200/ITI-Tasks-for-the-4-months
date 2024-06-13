function random(number){
    return Math.floor(Math.random() * (number + 1))
}

var  bgColore = document.getElementsByClassName("bgColor")[0];


function bgChange(){
    var renCol = `rgb(${random(255)} ${random(255)} ${random(255)}) `;
    console.log(renCol);
    //e.body.style.backgroundColor = renCol;
    var newDiv = bgColore.cloneNode(true);
    document.body.appendChild(newDiv);
    document.body.lastChild.style.backgroundColor = renCol;
    document.body.lastChild.style.flexDirection = 'row';
}


bgColore.addEventListener("click",bgChange);

// bgColore.cloneNode(true);
