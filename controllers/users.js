/* eslint-disable no-unused-vars */

const sha1 = require('sha1');
const model = require('../models/users');
const errorHandling = require('../helpers/errorHandling');
const jwtToken = require('../helpers/jwtToken');
const InputError = require('../classes/errors/InputError');
const DatabaseError = require('../classes/errors/DatabaseError');

// Insert an new user
exports.post = async doc => {
  let user;

  try {
    user = await model.getUserByUsername(doc.username);
  } catch (err) {
    // continue regardless of errors
  }

  if (user) {
    throw new InputError(
      `The username ${doc.username} already exists ${JSON.stringify(user)}`
    );
  } else {
    user = { ...doc };
    user.password = sha1(doc.password);

    const ret = await model.post(user);
    return {
      ...ret,
      token: jwtToken.encode({ _id: ret.id, _rev: ret.rev, ...user })
    };
  }
};

// Update an user
exports.put = async doc => {
  return model.put(doc);
};

// Return the specified user
exports.get = async id => {
  return model.get(id);
};

// Returns the list of all employess
exports.getAll = async (limit, startkey) => {
  return model.getAll(limit, startkey);
};

// Delete the specified user
exports.delete = async idrev => {
  return model.delete(idrev);
};
