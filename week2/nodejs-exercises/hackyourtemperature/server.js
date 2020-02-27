const express= require('express');
const app = express();
const exphbs = require('express-handlebars')
const port = 3000;


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: true }));


app.get('/',function(req, res){
    res.render('index')
});


app.post('/weather',function(req,res){
  const cityName = req.body.cityName;
 res.render('index', {cityName})
});

app.listen(port,()=> console.log(`listen to port: ${port}`));