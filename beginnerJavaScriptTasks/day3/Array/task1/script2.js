// task 2
var array = [];
for(var i = 0; i < 5; i++){
    var number = prompt(`Pleas enter the numed ${i+1}`);
    array[i] = parseInt(number);
}

document.write(`The values ${array} <hr>`)

var sortArray = array.slice().sort(function(a, b) {
    return a - b;
});

// slice

document.write(`The values is reverse sortang ${sortArray.reverse()} <hr>`)

document.write(`The values  is sortang ${sortArray.reverse()}`)
