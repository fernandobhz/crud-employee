/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */

const PouchDB = require('pouchdb');
const PouchDBFind = require('pouchdb-find');
const designDocuments = require('../designDocuments');
const mangoIndexes = require('../mangoIndexes');

PouchDB.plugin(PouchDBFind);

if (!process.env.DB) process.env.DB = 'EMBEDDED';
const db = new PouchDB(process.env.DB);

// Creating all designDocuments
Object.values(designDocuments).forEach(async ddoc => {
  try {
    await db.put(ddoc);
  } catch (err) {
    if (err.name !== 'conflict') throw err;
  }
});

// Creating all mango indexes
Object.values(mangoIndexes).forEach(async midx => {
  try {
    await db.createIndex(midx);
  } catch (err) {
    if (err.name !== 'conflict') throw err;
  }
});

module.exports = PouchDB;
