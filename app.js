const express = require('express');
const parser = require('body-parser');
const {engine} = require('express-handlebars');
const path = require('path');
const cookieSession = require('cookie-session');
const registerRoute = require('./routes/registration')
const authMiddleware = require('./middlewares/authenticationMiddleware');

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(parser.urlencoded({extended: true}));
app.use(cookieSession({
    name: 'session',
    httpOnly: true,
    keys: ["asdghjhgsdahjsgdhjasd"],
    maxAge: 24 * 60 * 60 * 1000
}));

app.use(authMiddleware);
app.use(registerRoute);

app.listen(80)