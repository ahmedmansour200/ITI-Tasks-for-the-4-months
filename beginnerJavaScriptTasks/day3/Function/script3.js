
// task 3

function addNumberOfArray() {
    var array = [];
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            throw new Error("The pararameters is not number");

        }
        array.push(arguments[i]);
    }
    return array.reverse();
}
console.log(addNumberOfArray(2, 3, 4, 5, 8, 87));