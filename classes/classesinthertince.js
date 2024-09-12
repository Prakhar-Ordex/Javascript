class User {
    constructor(username) {
        this.username = username;
        
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`a new course wae add by ${this.username}`)
    }
}

const a  =new Teacher("chai","chai@gmail.com","123")
a.addCourse()
a.logMe()

const b = new User("shlok")
b.logMe()   
// b.addCourse() not accessible to child method

console.log(a instanceof Teacher)
console.log(a instanceof User)