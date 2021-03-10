// require necessary dependencies
const express = require('express');

const router = express.Router({ mergeParams: true });
const passport = require('passport');
const index = require('../controllers/index');

// Landing Route
router.get('/', index.index);

// Error Route (i.e every other route)
router.get('/*', index.errorPage);

module.exports = router;
