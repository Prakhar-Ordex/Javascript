// {
//     var a = 10;
// }

// function test() {
//     let b = 20;
// console.log(b)
// }
// test();
// console.log(a)
// // console.log(b)

// let name = "John";

// function sayHi() {
//   console.log("Hi, " + name);
// }
// sayHi();

// name = "Pete";

// function makeCounter() {
//     let count = 0;
  
//     return function () {
//         console.log(count)
//       return count++;
//     };
//   }
  
//   let counter = makeCounter();
//   let counter2 = makeCounter();
  
//   console.log( counter() )

// let x = 1;

// function func() {
//   console.log(x); // ?

//   let x = 2;
// }""
// // func();
// console.log(prakhar)
 
// let prakhar;

// (function (p) {
//     console.log(p)
// })(    "p"   )

function f1(a) {}
function f2(a, b) {}
function many(a, b, c, ...more) { }

// many(1,1,1,1,1,11,1,1,11,1,1)

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 2