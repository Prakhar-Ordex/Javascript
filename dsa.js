
"use strict";

// set -> it constains only unique values
// object constructer
// you can store any value in the set
//
// let myArray = [1,2,3,4]
// let obj = new Set(myArray);
// obj.add(10)
// obj.delete(1)
// let obj1 = { name: "prakhar", age: 19 }
// obj.add(obj1)
// console.log(obj)
// console.log(obj.has(3))
// for (let new1 of obj) {
//     console.log(new1)
// }
// obj.forEach((Element)=>{console.log(Element)})


// map -> store data in key and value pairs 

// let myMap = new Map([["a1","prakhar"],["a2","shlok"],["a3","shlok"]]);
// myMap.set("a2", "prakhar")
// myMap.delete("a2");
// console.log(myMap);
// console.log(myMap.get("a1"));
// for (let [key, value] of myMap) {
//     console.log(`key: ${key} value: ${value}`)
// }

// myMap.forEach((value, key) => { console.log(`key: ${key} value: ${value}`) });


// weakSet => {...} store object only not itrable
// only store object 
// it cannot be itreate 
// let ws = new WeakSet();
// let obj = {name:"prakhar"};
// let obj1 = {age:"20"};
// ws.add(obj)
// ws.add(obj1)
// // ws.delete(obj)
// console.log(ws)
// console.log(ws.has(obj))

// WeakMap => not itrable store only object

// let wm = new WeakMap();
// let obj = { name: "prakhar" };
// let obj1 = { age: "20" };
// wm.set(obj, obj1)
// console.log(wm.has(obj))
// console.log(wm)