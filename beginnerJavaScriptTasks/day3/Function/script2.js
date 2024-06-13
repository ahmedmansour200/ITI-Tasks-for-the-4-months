// task 2

function validateParametersIsNumber() {
    var sum = 0;
    for(var i = 0; i < arguments.length; i++  ){
        if (typeof arguments[i] !== 'number') {
            throw new Error("All parameters must be numerical values.");
        }
        sum += arguments[i];
    }     
        return sum;
        }
        console.log(validateParametersIsNumber(1, 2, 3, 4,3)); // Outputs: 10
        console.log(validateParametersIsNumber(10.5, 20.3, 30.2)); // Outputs: 61

        console.log(validateParametersIsNumber(1, "two", 3)); // Throws error
