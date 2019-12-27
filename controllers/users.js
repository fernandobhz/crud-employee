/* eslint-disable no-unused-vars */

const model = require('../models/users');

// Insert an new user
exports.post = async doc => {
  return model.post(doc);
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
