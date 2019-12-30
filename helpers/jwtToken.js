const jwt = require('jwt-simple');

exports.encode = doc => jwt.encode(doc, process.env.JWT);

exports.decode = token => jwt.decode(token, process.env.JWT);

exports.validate = token => {
  try {
    this.decode(token, process.env.JWT);
    return true;
  } catch (err) {
    return false;
  }
}
