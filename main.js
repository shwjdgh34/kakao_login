const express = require('express')
const fs = require('fs')
const app = express()
//const request = require("request")
const port = 3003



app.get('/', (req, res) => {
    console.log();
    fs.readFile(`lib/template.html`, 'utf8', (err, template) => {
    if (err) throw console.log(err);;
    res.send(template);
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))