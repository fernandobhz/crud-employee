const Joi = require('@hapi/joi');

module.exports = Joi.object({
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
