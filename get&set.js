// class Animal {
//     constructor(name) {
//         this._name = name;
//     }
//     fly() {
//         console.log("hello")
//     }
//     get name() {
//         return this._name;
//     }

//     set name(newName) {
//        this._name =newName;
//     }
// }

// let a =new  Animal("dog");
// a.fly()
// a.name = "animal"
// console.log(a.name)

let obj = {
    name: "John",
    age: 25,
    getname: function () {
        return this.name.toUpperCase();
    }
}
console.log(obj.getname());