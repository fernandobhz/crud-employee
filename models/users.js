/* eslint-disable no-unused-vars */
const PouchDB = require('../database');

const db = new PouchDB(process.env.DB);
const type = 'users';

// Insert an new user
exports.post = async doc => {
  return db.post({ ...doc, type });
};

// Update an user
exports.put = async doc => {
  return db.put({ ...doc, type });
};

// Return the specified user
exports.get = async id => {
  return db.get(id);
};

// Returns the list of all employess
exports.getAll = async (limit, startkey) => {
  const options = { key: type, include_docs: true };

  if (limit) options.limit = limit;
  if (startkey) options.startkey = startkey;

  return db.query('type', options);
};

// Delete the specified user
exports.delete = async idrev => {
  return db.remove(idrev);
};
