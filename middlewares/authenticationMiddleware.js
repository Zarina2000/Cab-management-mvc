const user = require('../models/registration');

module.exports = async (req, res, next) => {

    req.identity = {
        isAuthenticated: false,
        user: null

    }
    let userId = req.session.userId;
    if (userId) {
        let userFromDb = await user.findByPk(userId);
        if (userFromDb == null) {
            return res.redirect("/");
        }
        req.identity.isAuthenticated = true;
        req.identity.user = {
            id: userFromDb.dataValues.id,
            full_name: userFromDb.dataValues.full_name,
            email: userFromDb.dataValues.email,
            role: userFromDb.dataValues.role,
        }
        if (userFromDb.dataValues.role == "passenger") {
            req.identity.isPassenger = true;
        }
        else if (userFromDb.dataValues.role == "driver") {
            req.identity.isDriver = true;
        }
        else {
            req.identity.isAdmin = true;
        }
    }
    if (req.url == "/login" || req.url == "/registration") {
        return next();
    }
    if (!userId || userId == null) {
        return res.redirect("/login");
    }
    next();
}