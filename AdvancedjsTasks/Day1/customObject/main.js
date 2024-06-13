obj = {
    id: "ww",
    age: 23,
    getSetGen: function () {
    
        for (var x in this) {

            if (!(typeof this[x] === "function")) {

                let val = this[x];
                Object.defineProperty(this, x, {
                    get: function () {
                        console.log("56789");
                        return val;
                    },
                    set: function (value) {
                            val = value;
                        
                    }
                })
            }
        }
    }
}


var user = { name: "Ali", age: 10 };

// obj.getSetGen.call(user);
var obj1  = obj.getSetGen.bind(user);
// user.getSetGen();
obj1()
console.log(user.name);