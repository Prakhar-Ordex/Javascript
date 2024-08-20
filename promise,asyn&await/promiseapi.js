let p1 = new Promise((resolve, rejec) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 1000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 2 resolved');
    }, 2000);
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resolved');
    }, 3000);
})

// let a = Promise.all([p1,p2,p3])
// let a = Promise.allSettled([p1,p2,p3])
// let a = Promise.race([p1,p2,p3])
let a = Promise.any([p1,p2,p3])

a.then(values => {
    console.log(values);
})
