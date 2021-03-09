/* eslint-disable max-len */
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  // salt and hash for the password are generated automatically by passport
  salt: {type: String, select: false},
  hash: {type: String, select: false},
});

userSchema.set('timestamps', true);
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
