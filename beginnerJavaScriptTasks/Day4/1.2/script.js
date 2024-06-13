var days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


function myGetDay(date){
    var day = date.slice(0, 2);
    var month = date.slice(3, 5) - 1;
    var year = date.slice(6);
    var finalDate = new Date(year,month, day);
    
    return days[finalDate.getDay()];

}
    console.log(myGetDay("22-05-2024"));

    console.log(myGetDay("10-12-2000"));
// var str = "23/45";
// str.trim().
// // console.log(str.slice(0,2));

// console.log(str.slice(0,));