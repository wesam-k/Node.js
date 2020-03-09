



const fetch = require('node-fetch')
function nodeFetch() {
    const url = "http://api.icndb.com/jokes/random/"; 
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.value.joke)
        })
        .catch(err => {
            console.log(err);
        })
}

nodeFetch();