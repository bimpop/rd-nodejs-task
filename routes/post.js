const express = require('express');

const router = express.Router({ mergeParams: true });
const passport = require('passport');
const indexPost = require('../controllers/post/indexPost');
const showPost = require('../controllers/post/showPost');

// POST ROUTES
// get all posts
router.get('/', passport.authenticate('jwt', {session: false}), indexPost);

// get one post
router.get('/:id', passport.authenticate('jwt', {session: false}), showPost);

module.exports = router;
