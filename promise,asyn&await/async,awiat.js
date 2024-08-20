function getData() {
    fetch('https://jsonplaceholder.typicode.com/photos')
       .then(response => response.json())
       .then(data => {
            console.log(data);
        })
       .catch(error => console.error('Error:', error));
}

let a =getData()

console.log(a)