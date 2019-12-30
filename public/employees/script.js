/* eslint-disable */

function dataRnd() {
  window.ename.value = randomNames();
  window.pid.value = randomIntegers(8);
  window.eid.value = window.ename.value.replace(/\s/g, '.').toLowerCase();  

  window.token.value = localStorage.getItem('token');
}

function post() {
  const putData = JSON.stringify({
    name: window.ename.value,
    pid: window.pid.value,
    eid: window.eid.value    
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
  });

  $.put('/employees', putData, data => {
    window.data = data;
    window.putResults.innerHTML = JSON.stringify(data, null, 4);
    window._id.value = data.id;
    window._rev.value = data.rev;
  });
}

function get() {
  const getData = {
    limit: 10
  };

  $.get(`/employees/list`, getData, data => {
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


function del() {
  const delData = JSON.stringify({
    _id: window._id.value,
    _rev: window._rev.value    
  });

  $.delete('/employees', delData, data => {
    window.data = data;
    window.delResults.innerHTML = JSON.stringify(data, null, 4);
  });
}