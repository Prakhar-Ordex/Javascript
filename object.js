let user = {};

// set
user["likes birds"] = true;

// get
console.log(user["likes birds"]); // true

// delete
delete user["likes birds"];
console.log(user)

let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;

console.log(user)