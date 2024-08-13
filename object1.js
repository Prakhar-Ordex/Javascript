// let fruit ="apple"

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// console.log(bag.apple); // 5 if fruit="apple"

// function makeUser(name, age) {
//     return {
//       name, // same as name: name
//       age,  // same as age: age
//       // ...
//     };
// }
  
// let user = makeUser("John Doe", 30);
// console.log(user)

// let obj = {
//     0: "test" // same as "0": "test"
//   };
  
// obj.__name__ = "John Doe"
// obj.__proto__ = 5;
//   console.log(obj)
//   // both console.logs access the same property (the number 0 is converted to string "0")
//   console.log( obj["0"] ); // test
// console.log(obj[0]); // test (same property)
  

// let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     // ..,
//     "1": "USA"
//   };
  
//   for (let code in codes) {
//     console.log(code); // 1, 41, 44, 49
//   }


let user = {
    name: "John",
    sizes: {
      height: 182,
        width: 50,
        age: {
          years: 28,
          months: 9,
          days: 23
      }
    }
  };
  
//   let clone = Object.assign({}, user);
let clone = structuredClone(user);
  
  console.log( user.sizes.age === clone.sizes.age ); // true, same object
  
  // user and clone share sizes
  user.sizes.age.days = 60;    // change a property from one place
  console.log(clone.sizes.age.days); // 60, get the result from the other one