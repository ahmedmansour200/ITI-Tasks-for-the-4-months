
let obj = {
    name: 'Ahmed',
    age: 30,
    job: 'Engineer'
  };
  

  function* propertyGenerator(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        yield [key, obj[key]];
      }
    }
  }
  
  const generatorObject = propertyGenerator(obj);
  
  // Use for..of 
  for (const [key, value] of generatorObject) {
    console.log(`${key}: ${value}`);
  }
  