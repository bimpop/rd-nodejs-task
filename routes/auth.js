const express = require('express');

const router = express.Router({ mergeParams: true });
const mw = require('../middleware/index');
const mwAuth = require('../middleware/auth');
const register = require('../controllers/auth/register');
const login = require('../controllers/auth/login');

// AUTH ROUTES
// register route
router.post('/register', mwAuth.registerCheckSchema(), mw.validate, register);

// login route
router.post('/login', mwAuth.loginCheck(), mw.validate, login);

module.exports = router;
