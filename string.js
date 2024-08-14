// let str = `Hello`;

// // the first character
// console.log( str[0] ); // H
// console.log( str.at(0) ); // H

// // the last character
// console.log( str[str.length - 1] ); // o
// console.log(str.at(-1));
// console.log(str.length)
// console.log(str)

// let str = `Hello`;

// console.log( str[-2] ); // undefined
// console.log( str.at(-2) ); // l

// for (let char of "Hello") {
//     console.log(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
//   }

// let str = 'Hi';

// // str[0] = 'U'; // error
// console.log(str[0]); // doesn't work
// console.log(str)

// reverse string

// let a = "aba"

// console.log(a.split("").reverse().join(""))

// different case letters have different codes
// console.log( "Z".codePointAt(0) ); // 90
// console.log( "z".codePointAt(0) ); // 122
// console.log( "z".codePointAt(0).toString(16) ); // 7a (if we need a hexadecimal value)

let str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

console.log(str.repeat(1e5))