/* eslint-disable no-unused-vars */
const PouchDB = require('../database');
const DatabaseError = require('../classes/errors/DatabaseError');

const db = new PouchDB(process.env.DB);
const type = 'users';

// Insert an new user
exports.post = async doc => {
  try {
    return await db.post({ ...doc, type });
  } catch (err) {
    throw new DatabaseError(err);
  }
};

// Update an user
exports.put = async doc => {
  try {
    return await db.put({ ...doc, type });
  } catch (err) {
    throw new DatabaseError(err);
  }
};

// Return the specified user
exports.get = async id => {
  try {
    return await db.get(id);
  } catch (err) {
    throw new DatabaseError(err);
  }
};

// Returns the list of all employess
exports.getAll = async (limit, startkey) => {
  const options = { key: type, include_docs: true };

  if (limit) options.limit = limit;
  if (startkey) options.startkey = startkey;

  try {
    return await db.query('type', options);
  } catch (err) {
    throw new DatabaseError(err);
  }
};

// Delete the specified user
exports.delete = async idrev => {
  try {
    return await db.remove(idrev);
  } catch (err) {
    throw new DatabaseError(err);
  }
};

/* Other non-default methods */

// Get user by username
exports.getUserByUsername = async username => {
  try {
    const ret = await db.find({
      selector: {
        type,
        username
      }
    });

    if (ret.docs.length === 0) return null;
    else return ret.docs[0];
  } catch (err) {
    throw new DatabaseError(err);
  }
};
