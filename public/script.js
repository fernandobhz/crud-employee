/* eslint-disable */

function dataRnd() {
  window.ename.value = RandomNames.generate();
  window.pid.value = `${Math.round(Math.random() * 1000, 0)}`;
  window.eid.value = window.ename.value.replace(' ', '.').toLowerCase();
  window.password.value = `${Math.round(Math.random() * 10000000000, 0)}`;
}

function post() {
  const putData = JSON.stringify({
    name: window.ename.value,
    pid: window.pid.value,
    eid: window.eid.value,
    password: window.password.value
  });

  dataRnd();

  $.post('/employees', putData, data => {
    window.data = data;
    window.postResults.innerHTML = JSON.stringify(data, null, 4);
    window._id.value = data.id;
    window._rev.value = data.rev;
  });
}

function put() {
  const putData = JSON.stringify({
    _id: window._id.value,
    _rev: window._rev.value,
    name: window.ename.value,
    pid: window.pid.value,
    eid: window.eid.value,
    password: window.password.value
  });

  $.put('/employees', putData, data => {
    window.data = data;
    window.putResults.innerHTML = JSON.stringify(data, null, 4);
    window._id.value = data.id;
    window._rev.value = data.rev;
  });

}

function get() {
  $.get(`/employees`, data => {
    window.data = data;
    window.getResults.innerHTML = JSON.stringify(data, null, 4);
  });
}

function getOne() {
  $.get(`/employees/${window._id.value}`, data => {
    window.data = data;
    window.getOneResults.innerHTML = JSON.stringify(data, null, 4);
  });
}
