const passport = require('passport');
const User = require('../../models/user');

// register logic
const register = (req, res) => {
  // register the new user and let passport-local-mongoose handle the password encryption
  User.register({username: req.body.username}, req.body.password, (err, user) => {
    if (err) {
      return res.status(500).json({
        response: {
          code: 500,
          message: 'Error: user not registered.',
        },
        data: err,
      });
    }
    // authenticate the user with passport
    passport.authenticate('local', {session: false})(req, res, () => {
      // get user data then remove salt and hash
      const user = Object.assign(req.user, {salt: 'hidden', hash: 'hidden'});
      return res.status(200).json({
        response: {
          code: 200,
          message: 'Success: user registered.',
        },
        data: user,
      });
    });
  });
}

module.exports = register;
