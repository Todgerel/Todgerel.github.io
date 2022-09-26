const express = require("express");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.use((req, res, next) => { 
   console.log('This is always run'); next();
});
app.use('/result', (req, res, next) => {
    let name = req.body.name;
    let age = req.body.age;

    console.log(req.body); 
    res.send(`Welcome ${name} and your age is: ${age}`);
});
app.use('/', (req, res, next) => { 
    console.log('In another middleware!'); 
    res.send('<form action="/result" method="post"><label for="name">Name</label><input type="text" name="name"><label for="age">Age</label><input type="text" name="age"><input type="submit"></form>'); 
});

app.listen(3000);