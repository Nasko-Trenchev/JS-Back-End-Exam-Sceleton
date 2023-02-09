const express = require('express');

const config = require('./config')
const routes = require('./routes');
const viewEngine = require('./config/viewEngine');
const initDatabase = require('./config/databaseInit');

const app = express();

viewEngine(app);

app.use(express.static('src/static'));
app.use(express.urlencoded({extended: false}))
app.use(routes);

initDatabase()
.then(app.listen(config.PORT, () =>{
    console.log(`Server is running on port ${config.PORT}...`);
})) 
.catch(err=> console.log(err));

