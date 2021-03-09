const jsonwebtoken = require('jsonwebtoken');

/**
 * @param {*} user - The user object.  We need this to set the JWT `sub` payload property to the MongoDB user ID
 */
const issueJWT = (user) => {
  
  const _id = user._id;
  const expiresIn = '1d';
  
  const payload = {
    sub: _id,
    iat: Date.now()
  };
  
  const signedToken = jsonwebtoken.sign(payload, process.env.secretOrKey, {expiresIn: expiresIn});

  return {
    token: "Bearer " + signedToken,
    expires: expiresIn
  }
}

module.exports = issueJWT;
