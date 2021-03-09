// require dependencies
const express = require('express');

const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// require routes
const authRoutes = require('./routes/auth');
const indexRoutes = require('./routes/index'); // place this last (error page)
const passport = require('./config/passport');

// require mongoose configurations
require('./config/mongoose')(mongoose);

const { DB_URL } = process.env;

// connect to database with mongoose
try {mongoose.connect(DB_URL).then(
  () => { console.log('Connection to DB successful!'); },
  (err) => {
    console.log('Error: connection to DB failed: ', err);
  },
);} catch (err) {
  throw new Error('Error: connection to DB failed.');
}

// setup express app
// allow all cross-origin requests
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());

// ROUTES
app.use('/auth', authRoutes);
app.use(indexRoutes); // place this last because of the error page

// App server
app.listen(process.env.PORT, () => console.log(`App is listening at http://localhost:${process.env.PORT}`));
