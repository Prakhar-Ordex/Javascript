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
    get getname () {
        return this.name.toUpperCase();
    },

    set setname (newName) {
        this.name = newName.toUpperCase();
    }
 
}
console.log(obj.getname);
console.log(obj.setname = "Prakhar")
console.log(obj)