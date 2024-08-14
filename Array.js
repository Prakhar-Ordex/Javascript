// let fruits = ["Apple", "Orange", "Plum"];

// console.log( fruits ); // Apple,Orange,Plum

// let arr = [1, 2, 3];

// console.log( arr ); // 1,2,3
// console.log( String(arr) === '1,2,3' );

// console.log( [] + 1 ); // "1"
// console.log( [1] + 1 ); // "11"
// console.log( [1,2] + 1 ); // "1,21"

// let arr = ["a", "b"];

// arr.push(function() {
//   console.log( this );
// });

// arr[2](); // ?

// let arr = ["t", "e", "s", "t"];

// console.log( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

// console.log(arr.slice(-2)); // s,t (copy from -2 till the end)
// console.log(arr)

// let arr = ["I", "study", "JavaScript"];

// arr.splice(1, 1); // from index 1 remove 1 element

// console.log( arr ); // ["I", "JavaScript"]

// let arr = [1, 2];

// // create an array from: arr and [3,4]
// console.log( arr.concat([3, 4]) ); // 1,2,3,4

// // create an array from: arr and [3,4] and [5,6]
// console.log( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// // create an array from: arr and [3,4], then add values 5 and 6
// console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

// console.log(arr)

// let arr = [1, 2];

// let arrayLike = {
//   0: "something",
//   length: 1
// };

// console.log( arr.concat(arrayLike) );

// array sort method

// let arr = [12, 11, 130, 4, 25, 10, 0];

// arr.sort(function(a, b) {
//   return a - b;
// });

// console.log(arr); // [0, 4, 10, 11, 12, 25, 130]

// array reduce method

// let arr = [1, 2, 3, 4, 5];

// console.log(arr.slice())

// let result = arr.reduce((sum, current) => sum + current,0);

// console.log(result); // 15

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

// console.log( usersMapped[0].id ); // 1
// console.log( usersMapped[0].fullName );
// console.log(usersMapped )

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];

// let sortedArr = arr.sort((a, b) => b.age - a.age);
// console.log(sortedArr)

