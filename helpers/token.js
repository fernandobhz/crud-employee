const jwt = require('jwt-simple');

module.exports = doc => {
  return jwt.encode(doc, process.env.JWT);
};
