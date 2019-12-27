const PouchDB = require('../database');
const DatabaseError = require('../classes/errors/DatabaseError');

const db = new PouchDB(process.env.DB);

exports.getUserByUsername = async username => {
  try {
    return db.find({
      selector: {
        type: 'users',
        username
      }
    });
  } catch (err) {
    throw new DatabaseError(err);
  }
};
