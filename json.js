// json use to store the data and transport data


let user = {
    name: "prakhar",
    age: 19,
    city: "delhi",
    hobbies: ["reading", "painting", "cooking"],
    address: {
        street: "g-10",
        city: "delhi",
        state: "delhi"
    }
}
let stringData = JSON.stringify(user)
let a = stringData.replace("delhi", "Ahmedabad")
let b = JSON.parse(stringData)
console.log(b) 