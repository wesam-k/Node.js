'use strict'

const fetch = require('node-fetch');



const people = {
    "name": "wesam alkfere",
    "numberOfPeople": 5
}

function nodeFetch() {
    const url = "https://reservation100-sandbox.mxapps.io/api/reservations";
    fetch(url, {
            method: 'post',
            body: JSON.stringify(people),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res =>{
            return res.text()
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err);
        })
};
nodeFetch();