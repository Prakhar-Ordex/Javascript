// let billion = 1_000_000_000;

// let billion = 1e9;

let billion = 7.3e9;

// 1e3 === 1 * 1000; // e3 means *1000
// 1.23e6 === 1.23 * 1000000; // e6 means *1000000

// -3 divides by 1 with 3 zeroes
// 1e-3 === 1 / 1000; // 0.001

// // -6 divides by 1 with 6 zeroes
// 1.23e-6 === 1.23 / 1000000; // 0.00000123

// // an example with a bigger number
// 1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times

// console.log( 0xff ); // 255
// console.log( 0xFF ); // 255 (the same, case doesn't matter)
// console.log(billion)

// let num = 255;

// console.log( num.toString(16) );  // ff
// console.log( num.toString(2) );

// let num = 3.9;

// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));
// // console.log(Math.trunc(num));


// let num = 12.99;
// console.log( num.toFixed(0) );


// console.log( 1e500 );
// console.log( 0.1 + 0.2  == 0.3 ); // false

// console.log(0.1.toString(2)); // 0.0001100110011001100110011001100110011001100110011001101
// console.log(0.2.toString(2)); // 0.001100110011001100110011001100110011001100110011001101
// console.log((0.1 + 0.2).toString(2)); // 0.0100110011001100110011001100110011001100110011001101

// console.log(0.1.toFixed(20)); // 0.100000000000000005550

// let strNum = "10.12px";

// console.log(parseInt(strNum))

// let num = 6.35 *10;

// console.log(num.toFixed(20))

// console.log(Math.round(num))
function randomInteger(min, max) {
    // now rand is from  (min-0.5) to (max+0.5)
    let rand = min  + Math.random() * (max - min );
    return Math.floor(rand);
}
  
console.log(randomInteger(1,9))
  