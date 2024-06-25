


function theMinAndMax(...array) {
    // console.log(array);
    let min = Math.min(...array);
    let max = Math.max(...array);
    return `The Max in array : ${max} , The min in array : ${min}`
}

// test
console.log(theMinAndMax(0, 1, 2, 3, 4, 5));
console.log(theMinAndMax(2, 3, 4, 5));
console.log(theMinAndMax());
