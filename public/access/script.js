/* eslint-disable */

function login() {
  const loginData = JSON.stringify({
    username: window.username.value,
    password: window.password.value
  });

  $.post('/access/login', loginData, data => {
    window.data = data;
    window.loginResults.innerHTML = JSON.stringify(data, null, 4);
    window._id.value = data.id;
    window._rev.value = data.rev;

    window.token.value = data.token;
  });
}

function logout() {
  $.post('/access/logout', () => {
    localStorage.removeItem('token');
    window.token.value = "";
  });
}
