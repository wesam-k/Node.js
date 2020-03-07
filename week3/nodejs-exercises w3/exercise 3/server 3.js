'use strict'

const express = require("express");
const app = express();
const fetch = require('node-fetch');
const port = 3000;


const people = {
    "name": "wesam alkfere",
    "numberOfPeople": 5
}

app.get('/', (req, res) => {
    const url = "https://reservation100-sandbox.mxapps.io/api/reservations";
    fetch(url, {
            method: 'post',
            body: JSON.stringify(people),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err);
        })
})



app.listen(port, () => console.log("here you are", port));