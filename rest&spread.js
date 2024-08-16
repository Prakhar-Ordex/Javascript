// rest and spread oprator

// Array
// rest :

// const addNum = (a, b, c, ...rest) => {
//     console.log(rest)
//     return a + b + c;
// }

// console.log(addNum(1, 2, 3, 4, 5, 4, 5, 5, 6, 7, 7, 8, 8, 9))

// spread:

// let num = [1, 2, 3, , 4, 5, 5, 6, 767,];

// const getNum = (nums) => {
//    return nums
// }
 
// console.log(getNum(...num))

// Object

let student = {
    name: "John",
    age: 18,
    city: "New York",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    },
    hobbies: ["Reading", "Gaming", "Cooking"]
}

let { name, age, city,...rest } = student;

// console.log(rest)

// spread

let newStudent = { ...student, hobbies: [...student.hobbies, "Swimming"] }
