/* eslint-disable no-unused-vars */
const express = require('express');
const sha1 = require('sha1');
const putSchema = require('../schemas/users/putUser');
const postSchema = require('../schemas/users/postUser');
const deleteSchema = require('../schemas/deleteObject');
const controller = require('../controllers/users');
const errorHandling = require('../helpers/errorHandling');

const router = express.Router();

// Insert an new user
router.post('/', async (req, res, next) => {
  const { error, value } = postSchema.validate(req.body);
  if (error) return res.status(400).json(error);

  req.body.password = sha1(req.body.password);

  try {
    return res.json(await controller.post(req.body));
  } catch (err) {
    return errorHandling(err, req, res, next);
  }
});

// Update an user
router.put('/', async (req, res, next) => {
  const { error, value } = putSchema.validate(req.body);
  if (error) return res.status(400).json(error);

  try {
    return res.json(await controller.put(req.body));
  } catch (err) {
    return errorHandling(err, req, res, next);
  }
});

// Returns the list of all employess
router.get('/list', async (req, res, next) => {
  try {
    return res.json(
      await controller.getAll(req.query.limit, req.query.startkey)
    );
  } catch (err) {
    return errorHandling(err, req, res, next);
  }
});

// Return the specified user
router.get('/:id', async (req, res, next) => {
  try {
    return res.json(await controller.get(req.params.id));
  } catch (err) {
    return errorHandling(err, req, res, next);
  }
});

// Delete the specified user
router.delete('/', async (req, res, next) => {
  const { error, value } = deleteSchema.validate(req.body);
  if (error) return res.status(400).json(error);

  try {
    return res.json(await controller.delete(req.body));
  } catch (err) {
    return errorHandling(err, req, res, next);
  }
});

module.exports = router;
