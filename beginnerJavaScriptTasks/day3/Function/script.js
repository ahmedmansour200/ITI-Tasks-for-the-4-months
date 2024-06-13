//task 1

function validateParameters(param1, param2) {
    if (arguments.length !== 2) {
        throw new Error("This function requires exactly 2 parameters.");
    }
    console.log(`The argument is tow`);
}
// test
console.log(validateParameters(2,5));  // The argument is tow

console.log(validateParameters(2)); // throw

