//task 1

var text = prompt("Please enter string is palindrome");

var considerCase = confirm("user whether to consider case of the enter string or not");


if (!considerCase) {
    text = text.toUpperCase();
splitText(text)
}
else{
 splitText(text)
}
function splitText(text){

    // var mid = Math.floor(text.length / 2);

    // var str1 = text.slice(0, mid);
    // var str2 = text.slice(text.length % 2 ? mid + 1 : mid);
    

    // var str1 = text.slice(0, ( text.length / 2) );
    // var str2 = text.slice(( (text.length) % 2 ? (text.length)/2 + 1 :((text.length)) / 2 ) , text.length);
    
     // console.log(str1);
    // console.log(str2);

    if (text === text.split('').reverse().join(''))  {
    document.write(`<p>The  string ${text} is a palindrome.</p>`);
    } else {
    document.write(`<p>The string ${text} is not a palindrome.</p>`);
    }    

}

