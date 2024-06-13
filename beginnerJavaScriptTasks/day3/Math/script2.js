
// task 2
do{
    var number = prompt(" Enter another value to calculate its square root");
}while(isNaN(number))

document.write(`the number ${number} the square root  = ${Math.sqrt(parseInt(number))}`);