const controller = require('./employees');
const randomNames = require('../public/randomNames');

describe('testing the crud operations on employee', () => {
  const makeRandomEmployee = () => {
    const name = randomNames.generate();
    const pid = Math.round(Math.random() * 1000, 0);
    const eid = name.replace(' ', '.').toLowerCase();
    const password = Math.round(Math.random() * 10000000000, 0);

    return { name, pid, eid, password };
  };

  const employeeData = makeRandomEmployee();
  let insertResult;

  it('inserting a new employee', () => {
    expect.assertions(3);
    insertResult = controller.post(employeeData);
    expect(insertResult.ok).toBe(true);
    expect(insertResult.id).not.toBeNull();
    expect(insertResult.rev).not.toBeNull();
  });

  it('updating the employee password', () => {
    expect.assertions(1);
    const employeeUpdate = {
      _id: insertResult.id,
      _rev: insertResult.rev,
      ...employeeData
    };

    const updateResult = 
  });
});

// put some updates

// get form db

// get all from db

// delete that emplooyee
