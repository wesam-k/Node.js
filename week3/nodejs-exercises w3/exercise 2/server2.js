'use strict'

const express = require("express");
const app = express();
const fetch = require('node-fetch');
const port = 3000;

const authentication = 'admin:hvgX8KlVEa';
const encodedBase64 = new Buffer(authentication).toString('base64')



app.get('/', (req, res) => {
    const url = "https://restapiabasicauthe-sandbox.mxapps.io/api/books"; // we should use this url as the website structure 
    fetch(url, {
            headers: {
                'authentication': encodedBase64
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err);
        })
})



app.listen(port, () => console.log("here you are", port));