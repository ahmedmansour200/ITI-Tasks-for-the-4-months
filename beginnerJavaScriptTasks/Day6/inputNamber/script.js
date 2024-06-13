var input =  document.querySelector(".input");
input.addEventListener("input" ,function(e){
    // if(e.key !== Number){
        // console.log();
        // console.log(e.preventDefault());
    // }

    var inputNumber = e.target;
    var value = inputNumber.value;

    
    // var filteredValue = '';
    
    // // Filter out non-numeric characters
    // for (var i = 0; i < value.length; i++) {
    //     var char = value.charAt(i);
    //     if (char >= '0' && char <= '9') {
    //         filteredValue += char;
    //     }
    // }
    // input.value = value = filteredValue;

     inputNumber.value = value.replace(/[^0-9]/g, '');

    });

