const jwtToken = require('./jwtToken');

describe('testing JWT Token library', () => {
  it('enconde, decode and validate', () => {
    expect.assertions(4);

    const data = { a: 1, b: 2, c: 3 };

    const token = jwtToken.encode(data);

    expect(token).not.toBeNull();

    const data2 = jwtToken.decode(token);

    expect(data2).toBeInstanceOf(Object);

    const valid = jwtToken.validate(token);

    expect(valid).toBe(true);

    expect(JSON.stringify(data)).toBe(JSON.stringify(data2));
  });
});
