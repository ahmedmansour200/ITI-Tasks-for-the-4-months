// test

// The every() method of Array instances tests whether all elements in the array 
// pass the test implemented by the provided function. It returns a Boolean value. 

let fruits = ["apple", "strawberry", "banana", "orange", "mango"];


//// a
let allArrayStrings = fruits.every(ele => typeof ele === 'string');

console.log(allArrayStrings); // true

/// b

let starString = fruits.some(ele => ele.startsWith('a'));

console.log(starString); // true

// c

let filterTheStart = fruits.filter(ele => ele.startsWith('b') || ele.startsWith('s'))

console.log(filterTheStart);

/// d

let newArray = fruits.map(ele=>`I like ${ele}`)

console.log(newArray);

// e
newArray.forEach((ele) => {
    document.writeln(`<p>${ele}</p>`)
})