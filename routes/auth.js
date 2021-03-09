const express = require('express');

const router = express.Router({ mergeParams: true });
const register = require('../controllers/auth/register');
const login = require('../controllers/auth/login');

// AUTH ROUTES
// register route
router.post('/register', register);

// login route
router.post('/login', login);

module.exports = router;
