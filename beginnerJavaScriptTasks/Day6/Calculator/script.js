
var answer = document.getElementById("Answer");

function EnterNumber(x){
    answer.value += x;
    // console.log(answer.value);
}
function EnterClear(){
    answer.value = null;
    // console.log(answer.value);
}
function EnterOperator(x){
    answer.value += x;
    // console.log(answer.value);
}
function EnterEqual(){
    
    answer.value = eval(answer.value);
}