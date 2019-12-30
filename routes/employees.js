/* eslint-disable no-unused-vars */
const express = require('express');
const putSchema = require('../schemas/employees/putEmployee');
const postSchema = require('../schemas/employees/postEmployee');
const deleteSchema = require('../schemas/deleteObject');
const controller = require('../controllers/employees');
const errorHandling = require('../helpers/errorHandling');

const router = express.Router();

// Insert an new employee
router.post('/', async (req, res, next) => {
  const { error, value } = postSchema.validate(req.body);
  if (error) return res.status(400).json(error);

  try {
    return res.json(await controller.post(req.body));
  } catch (err) {
    errorHandling(err, req, res, next);
  }
});

// Update an employee
router.put('/', async (req, res, next) => {
  const { error, value } = putSchema.validate(req.body);
  if (error) return res.status(400).json(error);

  try {
    return res.json(await controller.put(req.body));
  } catch (err) {
    errorHandling(err, req, res, next);
  }
});

// Returns the list of all employess
router.get('/list', async (req, res, next) => {
  try {
    return res.json(
      await controller.getAll(req.query.limit, req.query.startkey)
    );
  } catch (err) {
    errorHandling(err, req, res, next);
  }
});

// Return the specified employee
router.get('/:id', async (req, res, next) => {
  try {
    return res.json(await controller.get(req.params.id));
  } catch (err) {
    errorHandling(err, req, res, next);
  }
});

// Delete the specified employee
router.delete('/', async (req, res, next) => {
  const { error, value } = deleteSchema.validate(req.body);
  if (error) return res.status(400).json(error);

  try {
    return res.json(await controller.delete(req.body));
  } catch (err) {
    errorHandling(err, req, res, next);
  }
});

module.exports = router;
