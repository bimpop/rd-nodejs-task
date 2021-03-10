const { check, checkSchema } = require('express-validator');

// register and login user input check
module.exports = {
  // To check user register input
  registerCheckSchema: (req, res, next) => checkSchema({
    username: {
        notEmpty: true,
        isLength: {
            options: [{ min: 3 }],
            errorMessage: 'username must be at least 3 characters.',
        },
        isAlpha: {
            errorMessage: 'username must be alphabet.',
        },
        errorMessage: 'Email cannot be empty.',
    },
    password: {
        notEmpty: true,
        isLength: {
            options: [{ min: 6 }],
            errorMessage: 'Password must be at least 6 characters.',
        },
        matches: {
            options: ['(?=.*[a-zA-Z]).*', 'g'],
            errorMessage: 'Password must contain at least an alphabet.',
        },
        errorMessage: 'Password cannot be empty.',
    },
  }),

  // To check user login input
  loginCheck: (req, res, next) => [
    check('username', 'Username cannot be empty.').notEmpty(),
    check('password', 'Password cannot be empty.').notEmpty(),
  ],
}