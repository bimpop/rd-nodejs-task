const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const User = require('../models/user');

// At least `jwtFromRequest` and `secretOrKey` properties must be inputted
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.secretOrKey,
  };

// app.js will pass the global passport object here, and this function will configure it
module.exports = (passport) => {
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        User.findOne({_id: jwt_payload.sub}, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    }));
    passport.use(new LocalStrategy({}, User.authenticate()));
}