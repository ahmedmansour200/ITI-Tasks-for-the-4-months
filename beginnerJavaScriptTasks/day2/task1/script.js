var number;
var totalsum = 0;
do{
    number = prompt("Please enter your Namber from 0 in 100");
    var numberOFInt = parseInt(number);
    if(isNaN(numberOFInt)){
        alert("The not Namber ,please enter number");
         continue;
        }   
    if(numberOFInt == 0 || totalsum + numberOFInt >= 100){
        break;
    }
    totalsum += numberOFInt;
}while(true);
document.write("<p>" + totalsum + " </p>");