module.exports = class extends Error {
  constructor(err) {
    super(err.message);
    this.name = 'DatabaseError';
    this.innerError = err;
  }
};
