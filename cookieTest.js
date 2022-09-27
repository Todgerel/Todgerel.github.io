const express = require("express");
const app = express();
const cparser = require("cookie-parser");
const session = require("express-session");
app.use(session({
    secret: "something"
}));
app.use(cparser());

app.get("/", (req, res) => {
    if(req.session.cart){
        res.send(req.session.cart.productName);
    }else{
        req.session.cart = {
            productName: "Wig"
        }
        res.send("No card");
    }
})