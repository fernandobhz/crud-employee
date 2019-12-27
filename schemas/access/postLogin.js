const Joi = require('@hapi/joi');

module.exports = Joi.object({
  username: Joi.string()
    .min(1)
    .max(255)
    .required(),
  password: Joi.string().min(6)
});
