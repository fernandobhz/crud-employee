const sha1 = require('sha1');
const model = require('../models/access');
const AuthError = require('../classes/errors/AuthError');

exports.login = async (username, password) => {
  const user = await model.getUserByUsername(username);

  try {
    if (user.password === sha1(password)) {
      return user;
    }
    throw new AuthError();
  } catch (err) {
    throw new AuthError();
  }
};

exports.logout = async () => {
  return {};
};
