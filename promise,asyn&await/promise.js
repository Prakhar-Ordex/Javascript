// let p1 = new Promise((resolve, reject) => {
//   let a = 0.50;
//   if (a < 0.5) {
//     reject("Error: Random number less than 0.5");
//   } else {
//     setTimeout(() => {
//       console.log("first");
//       resolve("data");
//     }, 3000);
//   }
// });

// p1.then((a) => {
//   console.log(a);
// }).catch((err) => {
//   console.log(err);
// });


// promise chainig

let p1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("Error: Random number less than 0.5");
  } else {
    setTimeout(() => {
      console.log("first");
      resolve("data");
    }, 3000);
  }
});