const express = require("express")
const app = express()
const fs = require("fs");
const port = 3000;

app.use(express.json());


app.post('/blogs', (req, res) => {
    const title= req.body.title;
    const content = req.body.content;
    fs.writeFileSync(title, content);
    res.end('post title and content')
});

app.get('/blogs/:title', (req, res) => {
    const title= req.params.title;
    res.sendfile(title);
    res.end('ok')
})


app.put('/blogs', (req, res) => {
    const title= req.body.title;
    const content = req.body.content;
    if (fs.existsSync(title)) {
      fs.writeFileSync(title, content);
      res.end('ok exist title ')
    }
    else {
      res.end('post does not exist');
    }
});

app.delete('/blogs/:title', (req, res) => {
    const title= req.params.title;
    fs.unlinkSync(title);
    res.end('title file is deleted');
});





app.listen(port, ()=> console.log(`listen is working${port}`));
