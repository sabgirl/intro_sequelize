const express = require('express');
const app = express();
const models = require("./models");
const bodyParser = require('body-parser');
//const port = 3000;

app.use(express.urlencoded({
    extended: true
}));

require('./routes/Heroes')(app)


models
    .sequelize
    .sync()
    .then(() => {
        app.listen(3000, console.log(`Server is running well!`))
    });