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
