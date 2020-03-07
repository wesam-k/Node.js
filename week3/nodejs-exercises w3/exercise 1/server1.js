
const express = require("express")
const app = express()
const fetch = require('node-fetch')
const port = 3000;

app.get('/', (req, res) => {
    const url = "http://api.icndb.com/jokes/random/"; 
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.value.joke)
        })
        .catch(err => {
            console.log(err);
        })
})


app.listen(port, () => console.log('here you are ', port));
