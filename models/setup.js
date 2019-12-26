/* eslint-disable no-underscore-dangle */

const PouchDB = require('pouchdb');
const designDocuments = require('../designDocuments');

const db = new PouchDB(process.env.DB);

module.exports = async () => {
  Object.values(designDocuments).forEach(async ddoc => {
    try {
      await db.put(ddoc);
    } catch (err) {
      if (err.name !== 'conflict') throw err;
    }
  });
};
