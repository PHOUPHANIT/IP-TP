const express = require('express');
const app = express();
const fs = require('fs')

app.get('/', (req, res) => {
    fs.readFile('./html/indexBook.html', 'utf8', (err, html) => {
        if (err) {
            console.error(err)
            return
        }
        res.send(html);
    })
})

app.get('/detail', (req, res) => {
    fs.readFile('./html/detail/detailBook.html', 'utf8', (err, html) => {
        if (err) {
            console.error(err)
            return
        }
        res.send(html);
    })
})

app.listen(3000, () => {
    console.log("Listen http://localhost:3000/");
})