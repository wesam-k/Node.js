'use strict'

const fetch = require('node-fetch');

const Authorization  = 'admin:hvgX8KlVEa';
const encodedBase64 = new Buffer(Authorization ).toString('base64')
const url = "https://restapiabasicauthe-sandbox.mxapps.io/api/books"; // we should use this url as the website structure 
fetch(url, {
            headers: {
                'Authorization ': `basic${encodedBase64}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err);
        })
};



