/* eslint-disable */

$.ajaxSetup({
  contentType: 'application/json; charset=utf-8'
  /* , beforeSend(xhr) {
    xhr.setRequestHeader('Authorization', `Bearer ${window.token.value}`);
  } */
});

$.put = function(url, data, callback, type){
 
  if ( $.isFunction(data) ){
    type = type || callback,
    callback = data,
    data = {}
  }
 
  return $.ajax({
    url: url,
    type: 'PUT',
    success: callback,
    data: data,
    contentType: type
  });
}


$.delete = function(url, data, callback, type){
 
  if ( $.isFunction(data) ){
    type = type || callback,
        callback = data,
        data = {}
  }
 
  return $.ajax({
    url: url,
    type: 'DELETE',
    success: callback,
    data: data,
    contentType: type
  });
}


var RandomNames = {
  firstNames: [
    'Vinicius',
    'Talita',
    'Maria',
    'João',
    'José',
    'Marcos'
  ],
  middleNames: [
    'Costa',
    'Araújo',
    'Rodrigues',
    'Pereira',
    'Soares'
  ],
  lastNames: [
    'Pires',
    'Alves',
    'Álvares',
    'Moreira',
    'Ferreira'
  ],
  generate:function(quantity){
    var maxNames = this.firstNames.length * this.middleNames.length * this.lastNames.length;
    if (quantity > maxNames) {
      throw "Quantity greater than possible matches. Possible matches: "+maxNames;
    }
    var names = [];
    while ( names.length < quantity ) {
      var name = "";
      var first = Math.floor( Math.random() * this.firstNames.length );
      name+= this.firstNames[first];
      var middle = Math.floor( Math.random() * this.middleNames.length );
      name+= " "+this.middleNames[middle];
      var last = Math.floor( Math.random() * this.lastNames.length );
      name+= " "+this.lastNames[last];
      
      if (names.indexOf(name)==-1) {
        names.push(name);
      }
    }
    return names;
  }
};

function dataRnd() {
  window.ename.value = RandomNames.generate(1)[0];
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
