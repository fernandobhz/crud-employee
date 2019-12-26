/* eslint-disable no-unused-vars */
const PouchDB = require('pouchdb');

const db = new PouchDB(process.env.DB);
const type = 'employees';

// Returns the list of all employess
exports.getAll = async () => {
  return db.query('type', { key: type, include_docs: true });
};

// Return the specified employee
exports.get = async id => {
  return db.get(id);
};

// Update an employee
exports.put = async doc => {
  return db.put({ ...doc, type });
};

// Insert an new employee
exports.post = async doc => {
  return db.post({ ...doc, type });
};
