// apply , call & bind in js

// problem statement

let user = {
    name: "prakhar",
    age: 19,
    greet: function(a) {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. ${a}`);
    }
}

// user.greet(); // Hello, my name is prakhar and I am 25 years old.
// function call

let user1 = {
    name: "ramesh",
    age: 22
}

user.greet.call(user1,"Hello");
user.greet.apply(user1,["Hello"]);

// bind

let boundFunction = user.greet.bind(user1,"Hello");
boundFunction();    

// let user2 = {
//     firstName: "John",
//     sayHi() {
//       console.log(`Hello, ${this.firstName}!`);
//     }
//   };
  
//   let sayHi = user2.sayHi.bind(user2); // (*)
  
//   // can run it without an object
//   sayHi(); // Hello, John!
  
//   setTimeout(sayHi, 1000); // Hello, John!
  
//   // even if the value of user changes within 1 second
//   // sayHi uses the pre-bound value which is reference to the old user object
//   user2 = {
//     sayHi() { console.log("Another user in setTimeout!"); }
//   };