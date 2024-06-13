// task 1
//area = pi r 2

do{
    var radius = prompt("Enter the value of a circle’s radius");

}while(isNaN(radius))   

radius = parseInt(radius);
var area = (Math.PI) * (Math.pow(radius,2));
document.write(`The area = ${parseInt(area)} `);
