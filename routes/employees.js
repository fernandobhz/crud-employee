/* eslint-disable no-unused-vars */
const express = require('express');
const schema = require('../schemas/employees');
const controller = require('../controllers/employees');

const router = express.Router();

// Returns the list of all employess
router.get('/', async (req, res, next) => {
  try {
    return res.json(await controller.getAll());
  } catch (err) {
    return res.status(err.status).json(err);
  }
});

// Return the specified employee
router.get('/:id', async (req, res, next) => {
  try {
    return res.json(await controller.get(req.params.id));
  } catch (err) {
    return res.status(err.status).json(err);
  }
});

// Update an employee
router.put('/', async (req, res, next) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).json(error);
  }

  try {
    return res.json(await controller.put(req.body));
  } catch (err) {
    return res.status(err.status).json(err);
  }
});

// Insert an new employee
router.post('/', async (req, res, next) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.json(error);
  }

  try {
    return res.json(await controller.post(req.body));
  } catch (err) {
    return res.status(err.status).json(err);
  }
});

module.exports = router;
