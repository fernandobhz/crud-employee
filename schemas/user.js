const Joi = require('@hapi/joi');

module.exports = {
  name: Joi.string()
    .alphanum()
    .min(1)
    .max(255)
    .required(),
  username: Joi.string()
    .alphanum()
    .min(1)
    .max(255)
    .required(),
  password: Joi.string().min(6)
};
