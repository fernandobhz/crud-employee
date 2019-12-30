const sha1 = require('sha1');
const model = require('../models/users');
const AuthError = require('../classes/errors/AuthError');
const Token = require('../helpers/token');

exports.login = async (username, password) => {
  const user = await model.getUserByUsername(username);

  try {
    if (user.password === sha1(password)) {
      const ret = { ...user, token: Token(user) };
      delete ret.password;
      return ret;
    }
    throw new AuthError();
  } catch (err) {
    throw new AuthError();
  }
};

exports.logout = async () => {
  // Research the web to see a performatic way to logout with JWT
  return {};
};
