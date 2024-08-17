let a  = new Date();

console.log(a.getFullYear())
console.log(a.getHours())
console.log(a.getMinutes())
console.log(a.getSeconds())
console.log(a.getMilliseconds())
console.log(a.getDay())
console.log(a.getSeconds())

let today = new Date();

today.setHours(0);
console.log(today); // still today, but the hour is changed to 0

today.setHours(0, 0, 0, 0);
console.log(today); // still today, now 00:00:00 sharp.