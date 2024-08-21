let link = "https://jsonplaceholder.typicode.com/posts"

let a = fetch(link).then((value) => value.json()).then((value) => console.log(value));
 
