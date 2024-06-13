alert("Welcome to my site");
var userName = prompt("Please entet your name");
var color = prompt("Please entet your color chic the list red and green and blue");
switch(color){
    case "red":
        document.write("<h1 style ='color:" + color+ "'> Welcom " + userName + " </h1>")
        break;
        case "green":
        document.write("<h1 style ='color:" +color+ "'> Welcom " + userName + " </h1>")
        break;
        case "blue":
        document.write("<h1 style ='color:" + color + "'> Welcom " + userName + " </h1>")
        break;
        default :
        document.write("<h1 style ='color:#8B008B'> Welcom " + userName + " </h1>")
        
}
