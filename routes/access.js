/* eslint-disable no-unused-vars */
const express = require('express');
const controller = require('../controllers/access');
const postLoginSchema = require('../schemas/access/postLogin');
const AuthError = require('../classes/errors/AuthError');

const router = express.Router();

router.post('/login', async (req, res, next) => {
  const { error, value } = postLoginSchema.validate(req.body);
  if (error) return res.status(400).json(error);

  try {
    return res.json(await controller.login(req.body));
  } catch (err) {
    if (err instanceof AuthError) return res.status(403).send('Access Denied');
    return res.status(500);
  }
});

router.get('/logout', async (req, res, next) => {
  try {
    return res.json(await controller.logout());
  } catch (err) {
    return res.status(500);
  }
});

module.exports = router;
