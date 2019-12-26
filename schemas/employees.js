const Joi = require('@hapi/joi');

// I would improve that fields if I had time until delivery date.

module.exports = {
  _id: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  name: Joi.string()
    .alphanum()
    .min(1)
    .max(255)
    .required(),
  pid: Joi.number()
    .integer()
    .min(1)
    .required(),
  eid: Joi.string()
    .alphanum()
    .min(1)
    .max(255)
    .required(),
  password: Joi.string().min(6)
};
