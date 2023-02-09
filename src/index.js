const express = require('express');

const routes = require('./routes');
const viewEngine = require('./config/viewEngine');

const app = express();

viewEngine();

app.use(express.static('src/public'));
app.use(express.urlencoded({extended: false}))
app.use(routes);


app.listen(5000, () =>{

    console.log("Server is running on port 5000");
})

