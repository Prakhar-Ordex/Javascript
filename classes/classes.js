// classes is blue print of the object
// when declare new keyword class consructor automatically call 


class User {
    // basic constructor
    constructor(username,email,password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // basic functtion but here call function 
    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const a  = new User("shloki","shloaki@gmail.com","shi")
console.log(a.encryptPassword())
console.log(a.changeUsername())

// behind the scenes

// function USer(){
//     this.username = username;
//         this.email = email;
//         this.password = password;
// }

// User.prototype.encryptPassword = function (){
//     return `${this.password}abc`
// }

// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const b = new User("shloki","shloaki@gmail.com","shi")

// console.log(b.encryptPassword())

// console.log(b.changeUsername())
