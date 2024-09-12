// static properties use only class you can access only by class name 

class User {
    constructor(username) {
        this.username = username;
    }

    logMe(){
        console.log(`username: ${this.username}`)
    }

    // stop to access
    static crateId(){
        return `User ID: ${this.username.substr(0, 5).toUpperCase() + Math.floor(Math.random() * 1000000)}`
    }
}

const a = new User("Prakhar")
// console.log(a)

// console.log(a.crateId())

class Teacher extends User {
    constructor(username,email) {
        super(username)
        this.email = email;
    }

    get name(){
        return this.username
    }

    set name(value) {
        if (value.length < 4) {
          alert("Name is too short.");
          return;
        }
        this.username= value;
      }
}

const b = new Teacher("Shlok","shlok@gmail.com")
// b.logMe()
// console.log()
// console.log(b.name)

// b.name = "Prakash"

// console.log(b)

// stactic methods 

// class Animal {
//     constructor(name){
//         this.name = name;
//     }

//     walk(){
//         console.log("animal is waking" + "    "+ Animal.captilaze(this.name) )
//     }

//     static captilaze(name){
//         return name.charAt(0).toUpperCase() + name.slice(1);
//     }
// }

// const ani = new Animal("dog");

// ani.walk()

// belog to class only acces the class
class Person {
    static name = "John";
    static height= 100;

    static getUserInfo(){
        console.log(`my name is ${this.name} and ${this.height} `);
    }

    static setUserHeight(value){
        this.height = value;
    }
}

let newUser = new Person();

Person.setUserHeight(110);
Person.getUserInfo();