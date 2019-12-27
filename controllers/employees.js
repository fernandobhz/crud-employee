/* eslint-disable no-unused-vars */

const model = require('../models/employees');

// Insert an new employee
exports.post = async doc => {
  return model.post(doc);
};

// Update an employee
exports.put = async doc => {
  return model.put(doc);
};

// Return the specified employee
exports.get = async id => {
  return model.get(id);
};

// Returns the list of all employess
exports.getAll = async (limit, startkey) => {
  return model.getAll(limit, startkey);
};

// Delete the specified employee
exports.delete = async idrev => {
  return model.delete(idrev);
};
