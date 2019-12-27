/* eslint-disable no-unused-vars */
const PouchDB = require('pouchdb');

const db = new PouchDB(process.env.DB);
const type = 'employees';

// Insert an new employee
exports.post = async doc => {
  return db.post({ ...doc, type });
};

// Update an employee
exports.put = async doc => {
  return db.put({ ...doc, type });
};

// Return the specified employee
exports.get = async id => {
  return db.get(id);
};

// Returns the list of all employess
exports.getAll = async () => {
  return db.query('type', { key: type, include_docs: true });
};

// Delete the specified employee
exports.delete = async idrev => {
  return db.remove(idrev);
};
