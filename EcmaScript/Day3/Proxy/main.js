let obj = {
    name:'ahmed',
    address:'ert',
    age:29
}

let handel = {
    set(target , kay , val){
        if(kay === 'name'){
            if(typeof val != 'string' || val.length !== 7){
                throw  `the name is not string`;
            } 
        }
        if(kay === 'address'){
            if(typeof val != 'string'){
                throw  `the address is not string`;
            } 
        }
        if(kay === 'age'){
            if(typeof val != 'number' || val < 25 || val > 60){
                throw  `the age is not number and value not between 25 and 60.`;
            } 
        }
        target[kay] = val;
    }

}

let proxy = new Proxy(obj ,handel)

// name

// proxy.name = 'ahm';
// proxy.name = 23;

// proxy.name = 'mansour';
// console.log(`The name ${proxy.name}`);

// address
// proxy.address = 12;
proxy.address = 'egypt';
console.log(`the address ${proxy.address}`);

// age
// proxy.age = 'age';
// proxy.age = 12;
proxy.age = 28;
console.log(`the age ${proxy.age}`);