const passport = require('passport');
const issueJWT = require('../../lib/issueJWT');

require('../../config/passport')(passport) // as strategy in ./passport.js needs passport object

const login = (req, res, next) => passport.authenticate('local', (err, user, info) => {
    if (err) {
        // return next(err);
        return res.status(500).json({
        response: {
            code: 500,
            message: 'An error was encountered while authenticating login.',
        },
        data: err,
        });
    }
    if (!user) {
        return res.status(400).json({
        response: {
            code: 400,
            message: 'Invalid username or password.',
        },
        });
    }
    req.login(user, {session: false}, async (err) => {
        if (err) {
        // return next(err);
        return res.status(500).json({
            response: {
            code: 500,
            message: 'An error was encountered while logging user in.',
            },
            data: err,
        });
        }
        const tokenObject = issueJWT(user);
        res.status(200).json({
        response: {
            code: 200,
            message: 'Success: user authenticated.',
        },
        data: {
            token: tokenObject.token,
            expiresIn: tokenObject.expires
        },
        });
        return next();
    });
})(req, res, next);

module.exports = login;
