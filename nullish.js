let user ={
    students:{
        // name:"Prakhar",
        name:"",
        age:19,

    }
}

console.log(user.students.name || "not found")
console.log(user.students.name ?? "not found")