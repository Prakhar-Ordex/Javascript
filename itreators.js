// ireators
// // array
// var x = [100,200,300];

// let y = x[Symbol.iterator]();

// console.log( y.next())
// console.log( y.next())
// console.log( y.next().value)
// console.log( y.next().done)

// sttring

// let a = "Prakhar";

// let u = a[Symbol.iterator]();

// console.log(u.next())
// let result = u.next();
// while (!result.done) {
//     console.log(result.value);
//     result = u.next();
// }

// custom

function numberItreator(arr) {
    var nextNum = 0;
    return {
        next() {
            if (nextNum < arr.length) {
                return {
                    value: arr[nextNum++],
                    done:false
                }
            } else {
                return {
                    value:"array limit over",
                    done:true
                }
            }
            
        }
    }
}

let num = [1, 2, 3, 3, 4, 4, 54, 5, 6, 6];

let a = numberItreator(num)

console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())