/* The simple fact of requiring the app module here
 * will help us validade if there is a missing module
 * or any other app start problems
 */

const app = require('./app');

describe('importing the app', () => {
  it('validating the object app', () => {
    expect.assertions(1);
    expect(app).toBeInstanceOf(Object);
  });
});
