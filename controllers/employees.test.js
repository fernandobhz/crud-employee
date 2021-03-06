/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */

const controller = require('./employees');
const random = require('../public/random');

const makeRandomEmployee = () => {
  const name = random.names();
  const pid = random.intergers(5);
  const eid = name.replace(/\s/g, '.').toLowerCase();

  return { name, pid, eid };
};

describe('testing the crud operations on employee', () => {
  const postData = makeRandomEmployee();
  let postResult;

  it('inserting a new employee', async () => {
    expect.assertions(4);

    postResult = await controller.post(postData);

    expect(postResult.ok).toBe(true);
    expect(postResult.id).not.toBeNull();
    expect(postResult.rev).toHaveLength(34);
    expect(postResult.rev[0]).toBe('1');
  });

  let putResult;

  it('updating the employee', async () => {
    expect.assertions(4);

    const putData = {
      _id: postResult.id,
      _rev: postResult.rev,
      ...postData
    };

    putResult = await controller.put(putData);

    expect(putResult.ok).toBe(true);
    expect(putResult.id).toBe(postResult.id);
    expect(putResult.rev).toHaveLength(34);
    expect(putResult.rev[0]).toBe('2');
  });

  let getResult;

  it('getting the record from database', async () => {
    expect.assertions(6);

    getResult = await controller.get(postResult.id);

    expect(getResult._id).toBe(postResult.id);
    expect(getResult._rev).toBe(putResult.rev);
    expect(getResult.type).toBe('employees');
    expect(getResult.name).toBe(postData.name);
    expect(getResult.pid).toBe(postData.pid);
    expect(getResult.eid).toBe(postData.eid);
  });

  let listResult;

  it('listing first 10 rows from database', async () => {
    expect.assertions(4);

    listResult = await controller.getAll(10);

    expect(listResult.total_rows).not.toBeNaN();
    expect(listResult.offset).not.toBeNaN();
    expect(listResult.rows.length).toBeLessThanOrEqual(10);
    expect(listResult.rows).toBeInstanceOf(Array);
  });

  let deleteResults;

  it('deleting the created employee', async () => {
    expect.assertions(4);

    const deleteData = {
      _id: putResult.id,
      _rev: putResult.rev
    };

    deleteResults = await controller.delete(deleteData);

    expect(deleteResults.ok).toBe(true);
    expect(deleteResults.id).toBe(postResult.id);
    expect(deleteResults.rev).toHaveLength(34);
    expect(deleteResults.rev[0]).toBe('3');
  });
});
