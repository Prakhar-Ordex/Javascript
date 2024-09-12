
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {}

const a = new Animal("Shlok");

console.log(a instanceof Dog)