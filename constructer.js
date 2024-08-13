// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//   }
  
//   let user = new User("Jack");
  
//   console.log(user.name); // Jack
//   console.log(user.isAdmin); // false

function Student(first, last, age, cls) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
}

let student = new Student("John", "Doe", 18, "Freshman");

console.log(student)