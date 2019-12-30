const DatabaseError = require('../classes/errors/DatabaseError');
const InputError = require('../classes/errors/InputError');

module.exports = (err, req, res, next) => {
  if (err instanceof DatabaseError)
    return res.status(err.innerError.status).json(err.innerError);
  else if (err instanceof InputError) return res.status(400).json(err.message);
  else return res.status(500).end();
}
