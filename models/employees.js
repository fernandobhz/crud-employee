const PouchDB = require('../database');

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
exports.getAll = async (limit, startkey) => {
  const options = { key: type, include_docs: true };

  if (limit) options.limit = limit;
  if (startkey) options.startkey = startkey;

  return db.query('type', options);
};

// Delete the specified employee
exports.delete = async idrev => {
  return db.remove(idrev);
};
