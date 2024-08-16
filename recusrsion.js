//Recursion  when function is called iteself
// otherwise it will get called for infinte time
// if a function call itself then there must be an end point

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// console.log(factorial(10))
// let count = 1;
// function demo(num) {
//     console.log("first")
//     if(count > num) {
//         return;
//     }
//         count++;
//         demo(num);
// }

// demo(10)

// function fibonacci(n) {
//     return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(3))

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
//   function printList(list) {
  
//     console.log(list.value); // output the current item
  
//     if (list.next) {
//       printList(list.next); // do the same for the rest of the list
//     }
  
//   }
  
//   printList(list);

function printReverseList(list) {

    if (list.next) {
      printReverseList(list.next);
    }
  
    console.log(list.value);
  }
  
  printReverseList(list);