/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */

const userController = require('./users');
const accessController = require('./access');

const random = require('../public/random');

describe('testing the crud operations on user', () => {
  const postData = {
    username: random.intergers(10),
    password: random.intergers(10)
  };

  let postResult;

  it('inserting a new user', async () => {
    expect.assertions(4);

    postResult = await userController.post(postData);

    expect(postResult.ok).toBe(true);
    expect(postResult.id).not.toBeNull();
    expect(postResult.rev).toHaveLength(34);
    expect(postResult.rev[0]).toBe('1');
  });

  it('logging in', async () => {
    expect.assertions(4);

    const ret = await accessController.login(
      postData.username,
      postData.password
    );

    expect(ret._id).not.toBeNull();
    expect(ret._rev).toHaveLength(34);
    expect(ret.username).toBe(postData.username);
    expect(ret.token).not.toBeNull();
  });
});
