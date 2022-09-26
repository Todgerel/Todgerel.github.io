const express = require('express');
const app = express();
app.get('/', (req, res) => {
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