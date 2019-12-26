const Joi = require('@hapi/joi');

// I would improve that fields if I had time until delivery date.

module.exports = Joi.object({
  _id: Joi.string(),
  _rev: Joi.string(),
  name: Joi.string()
    .min(1)
    .max(255)
    .required(),
  pid: Joi.number()
    .integer()
    .min(1)
    .required(),
  eid: Joi.string()
    .min(1)
    .max(255)
    .required(),
  password: Joi.string().min(6)
});
