const express = require('express');
const parser = require('body-parser');
const {engine} = require('express-handlebars');
const registerRoute = require('./routes/registration')

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(parser.urlencoded({extended: true}));

app.use(registerRoute);

app.listen(80)