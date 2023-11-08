const express = require('express')
const app = express()

app.get('/about', (req, res) => {
    res.send("this is about page")
});

app.get('/my-json-api3', (req, res) => {
    res.send('"University" : "PIM"')
});

app.get('/user2', (req, res) => {
    res.json([
        {
          id: 1,
          firstname: 'Somchai',
          lastname: 'Jaidee',
        },
        {
          id: 2,
          firstname: 'Tony',
          lastname: 'Stark',
        }
     ]
     )
});

app.listen(3000, () => {
    console.log("Welcome to my page")
});