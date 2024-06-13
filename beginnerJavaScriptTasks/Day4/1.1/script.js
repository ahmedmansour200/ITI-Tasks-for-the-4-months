var birthDate = prompt("Please enter the birth date format (DD – MM – YYYY)");
function validationDate(birthDate) {
    if (birthDate.length !== 10 || birthDate[2] !== '-' || birthDate[5] !== '-') {
        throw "Wong Date Format";
    }

    var day = birthDate.slice(0, 2);
    var month = birthDate.slice(3, 5);
    var year = birthDate.slice(6);

    if(isNaN(day) || isNaN(month) || isNaN(year))
     {
        throw "Wong Date Format";
    
     }

     day = parseInt(day);
     month = parseInt(month) - 1;
     year = parseInt(year);


     return new Date(year,month,day);
}

try{
    alert(validationDate(birthDate));
}catch(e){
    alert("Wong Date Format");
}