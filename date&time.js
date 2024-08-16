//  beginning of January 1, 1970,

// let date = new Date();

// console.log(date.toString())
// console.log(date.toJSON())
// console.log(date.toDateString())
// console.log(date.toLocaleString())
// console.log(typeof date)

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23,5,3);
let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("02-14-2005")
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())

let mtTime = Date.now();

// console.log(mtTime)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))


let newDate = new Date();

// console.log(newDate.getDay());

// console.log(newDate.getFullYear());

console.log(newDate.toLocaleDateString("default", { timeZone: 'UTC' }));

