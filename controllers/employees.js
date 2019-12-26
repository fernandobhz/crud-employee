/* eslint-disable no-unused-vars */

const model = require('../models/employees');

// Returns the list of all employess
exports.getAll = async () => {
  return model.getAll();
};

// Return the specified employee
exports.get = async id => {
  return model.get(id);
};

// Update an employee
exports.put = async doc => {
  return model.put(doc);
};

// Insert an new employee
exports.post = async doc => {
  return model.post(doc);
};
