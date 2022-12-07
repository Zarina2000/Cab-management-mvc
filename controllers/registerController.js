const db = require('../models/registration');
const {body, validationResult} = require('express-validator');

module.exports.index = (req, res, next) => {
    // db.findAll().then(datas => {
    //     res.render('index', {
    //         data: datas
    //     });
    // })
}
module.exports.login = (req, res, next)=>{
    res.render('login');
}

module.exports.booking = (req, res, next)=>{
    res.render('booking');
}
// module.exports.prebooking = (req, res, next)=>{
//     res.render('prebooking');
// }
module.exports.getprebook = (req, res, next) => {
    res.render('prebooking');
}

module.exports.getIndex = (req, res, next)=>{
    res.render('index');
}
module.exports.adminHome = (req, res, next)=>{
    res.render('adminHome');
}

module.exports.loginPost = async (req, res, next)=>{
   
    // const {username, password} = req.body;
    const username = req.body.username;
    const password = req.body.password;
    const userFromDb = await db.findOne({
        where: {username: username, password: password}
    });
    
    if(userFromDb == null){
        res.render('login', {message: 'No user with this email or password was found.'})
    }
    req.session.userId = userFromDb.id;

    console.log('USER SESSION SET')

    if (userFromDb.dataValues.role == "passenger") {

        return res.redirect("/");

    } else if (userFromDb.dataValues.role == "driver") {

        return res.redirect("/");

    } else {

        return res.redirect("/adminHome");

    }

    res.redirect("/");

}

module.exports.getAll = (req, res, next) => {
    res.render('registration');
   
}

module.exports.addOne = (req, res, next)=>{
db.create({
    full_name:req.body.full_name,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password,
        confirm_password:req.body.confirm_password,
        role:req.body.role
})
.then((user)=>{
    res.redirect("/login");
   
})
}

module.exports.logout=(req,res,next)=>{
    req.session = null;
    res.redirect("/login");
}