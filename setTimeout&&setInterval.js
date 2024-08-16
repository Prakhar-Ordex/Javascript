// setTimeOut

const timeout = 2000; // in milliseconds

let a = setTimeout(() => {
  console.log("This message will be logged after 2 seconds");
}, timeout);

clearTimeout(a);

// setInterval

let b = setInterval(() => {
  console.log("first")  
})

// clearInterval(b)