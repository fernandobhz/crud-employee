module.exports = class extends Error {
  constructor(message, err) {
    super(message);
    this.name = 'DatabaseError';
    this.innerError = err;
  }
};
