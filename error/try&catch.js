// error handlenig

// let a = "10";

// let b = "20";

// let sum = parseInt(a)+parseInt(b);

 

// try {
//     console.log(x+x)
// } catch (error) {
//     console.log("errror");
// } finally {
//     console.log("sab chalega")
// }


// custom error
// const customError = new Error("custom error")
// customError.name = "custom error name"
// try {
//     throw customError
// } catch (error) {
//     console.log(error.message)
//     console.log(error.name)
// }
try {
    let age = 1000;

    if (age > 120) {
        throw new SyntaxError("Syntax error number must be between 120 and")
        
    }
} catch (error) {
    console.log(error.message)
    console.log(error.name)
    console.log(error.stack)
}

console.log("first")