var styleTable = document.querySelector("table");
styleTable.style.display = "none";

var numberPersons = prompt("Please enter number of persons");

var nameArr =[];
var ageArr = [];
for(var i = 0; i < numberPersons; i++){
    do{
        var newName = prompt(`Please enter the name  of ${i + 1}`);
        if(!vildidName(newName)){
            alert("Invlad name");
        }
    }while(!vildidName(newName))
            nameArr.push(newName);


    // if(!vildidName(name)){
    //     alert("Invlad name");
    // }else{
    //     nameArr.push(name);
    // }
   do{
    var age = prompt(`Please enter the age  of ${i + 1}`);
    if(!vildidAge(age)){
        alert("Invlad age");
    }
   }while(!vildidAge(age));
        ageArr.push(age);
}
console.log(ageArr,nameArr);

function vildidName(name){
    if(name.length >= 3 && name.length <= 10){
        return true
    }
        return false;
}
function vildidAge(age){
    if(age > 10 && age < 60){
        return true
    }
        return false;
}
// console.log(nameArr,ageArr);

///////////
var bodyTable = document.querySelector("tbody");

for(var i = 0; i < numberPersons; i++){
    console.log(nameArr[i]);
    var trElemant = document.createElement("tr");
    bodyTable.append(trElemant);
    trElemant.innerHTML=`<tr><td>${nameArr[i]}</td><td>${ageArr[i]}</td></tr>`;
}
styleTable.style.display = "inline-table";