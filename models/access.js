const PouchDB = require('../database');

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
    return null;
  }
};
