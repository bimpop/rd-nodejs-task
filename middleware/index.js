const { validationResult } = require('express-validator');

module.exports = {
  // To validate the any user input against the appropriate check or checkSchema
  validate: (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

    const result = {
      response: {
        responseCode: 422,
        message: 'User input error.',
      },
      data: extractedErrors,
    };

    return res.status(422).json(result);
  },
}