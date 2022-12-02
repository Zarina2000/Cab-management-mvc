const express = require('express');
const parser = require('body-parser');
// const {engine} = require('express-handlebars');
const path = require('path');
const cookieSession = require('cookie-session');
const registerRoute = require('./routes/registration')
const authMiddleware = require('./middlewares/authenticationMiddleware');
const {engine,create}= require('express-handlebars');
const app = express();
const hbs = create({

    defaultLayout: path.join(__dirname, 'views', 'layouts', 'main.handlebars'),

    extname: '.handlebars',

    partialsDir: path.join(__dirname, 'views', 'partials')

});

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');



app.use("/", parser.urlencoded({extended: true}));



app.use("/static", express.static(path.join(__dirname, 'static')));






app.use(cookieSession({
    name: 'login',
    httpOnly: true,
    keys: ["asahjh79823sdnlakjajkhdk"],
    maxAge: 24 * 60 * 60 * 1000

}));



app.use(authMiddleware);

// DO NOT TOUCH THIS CODE

// I'VE SPEND 2 HOURS WRITING THIS CODE.

// RE-CONFIGURES THE HANDLEBARS AND EXPRESS RENDER LOGIC TO

// INCLUDE AUTHENTICATION STATUS.

app.use("/", (req, res, next)=>{
    console.log(req.identity);
    res.render = (template, context)=>{
        if(!context)
            context = {}
        // console.log('✔✔✔', Object.keys(context.data.dataValues.login.dataValues));
        // console.log(context.passenger)
        context.identity = req.identity;
        hbs.renderView(path.join(__dirname, 'views', template + '.handlebars'), {
            layout: path.join(__dirname, 'views', 'layouts', 'main.handlebars'),
            cache: false,
            data: context
        })
        .then(rs=>{
            res.send(rs);
        });
    }
    next();
})
app.use(registerRoute);
app.listen(80);