const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());

const date = new Date();
const hour = date.getHours();

if(hour >= 6 & hour <= 18){ //
    app.use('/css', express.static(path.join(__dirname, "day.css")));
} else {
    app.use('/css', express.static(path.join(__dirname, "night.css")));
}

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "q4.html"));
});

app.post('/result', (req, res, next) => {
    let name = req.body.name;
    let age = req.body.age;
    res.redirect(`/output?name=${name}&age=${age}`);
});

app.get("/output", (req, res)=>{
    let name = req.query.name;
    let age = req.query.age;
    if (!name) {
        name = "person";
    }
    if (!age){
        age = "24";
    }
    res.send(`Welcome ${name} and Age is: ${age}`);
});

app.listen(3000);