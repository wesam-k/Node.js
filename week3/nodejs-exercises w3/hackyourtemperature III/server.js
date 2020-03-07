const express = require('express');
const app = express();
const exphbs = require('express-handlebars')
const axios = require("axios")
const port = 3000;

const APIKEY = require('./sources/secrets.json').API_KEY;

app.use(express.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.urlencoded({extended: true}));

app.use(express.static("static"));

app.get('/', function (req, res) {

  res.render('index', {
    weatherText: "Hello from the other side "
  })
})

app.post('/weather', function (req, res) {
  const city = req.body.cityName;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;

  axios.get(url)
    .then(res => {
      return res.data
    })
    .then(json => {
      const fah =(json.main.temp -273 ).toFixed()
      const degreesCelsius = ` the Temperature in ${json.name} is  ${fah}  ℉ now `
      res.render('index',{degreesCelsius})
    })
    .catch(err => {
      res.render('index', {
        errorText: `there is an err ${err.response.data.message}`
      })
    })
});

app.listen(port, () => console.log(`listen to port: ${port}`));
