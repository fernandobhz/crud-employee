/* eslint-disable */

function dataRnd() {
  window.username.value = randomNames();
  window.password.value = randomIntegers(10);

  window.token.value = localStorage.getItem('token');
}

function post() {
  const putData = JSON.stringify({
    username: window.username.value,
    password: window.password.value
  });

  dataRnd();

  $.post('/users', putData, data => {
    window.data = data;
    window.postResults.innerHTML = JSON.stringify(data, null, 4);
    window._id.value = data.id;
    window._rev.value = data.rev;
    window.token.value = data.token;
    
    localStorage.setItem('token', token);
  });
}

function put() {
  const putData = JSON.stringify({
    _id: window._id.value,
    _rev: window._rev.value,
    username: window.username.value,
    password: window.password.value
  });

  $.put('/users', putData, data => {
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

  $.get(`/users/list`, getData, data => {
    window.data = data;
    window.getResults.innerHTML = JSON.stringify(data, null, 4);
  });
}

function getOne() {
  $.get(`/users/${window._id.value}`, data => {
    window.data = data;
    window.getOneResults.innerHTML = JSON.stringify(data, null, 4);
  });
}


function del() {
  const delData = JSON.stringify({
    _id: window._id.value,
    _rev: window._rev.value    
  });

  $.delete('/users', delData, data => {
    window.data = data;
    window.delResults.innerHTML = JSON.stringify(data, null, 4);
  });
}