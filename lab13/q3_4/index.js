const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const router = require('../q3_4/routes/router');

app.use(bodyparser.urlencoded());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use((req, res, next) => {
    console.log("In the middleware!");
    next();
});

app.use(router);

app.listen(3000);
