
// task 2

do{
    var textOfE = prompt("Please enter of text");
}while(isFinite(textOfE))
    var count = 0;
    for(var i = 0; i < textOfE.length; i++){
        if(textOfE[i] ==  "e" || textOfE[i] ==  "E"){
            count++;
        }
    }
if(count > 0){
    document.write(`The String ${textOfE} exist 'e' = ${count}`);   
}else{
    document.write(`The String ${textOfE} is not exist 'e`);
}

