import fetchApi from '../service/index.js';

async function LoginInfo(e) {
  e.preventDefault();

  document.getElementById('lds-facebook').style.display = 'inline';

  const loginValue = document.querySelector('#login').value;
  const passwordValue = document.querySelector('#password').value;

  const obj = {
    username: loginValue,
    password: passwordValue,
  };

  // const req = await fetch('http://10.130.19.30/api/login/access-token', {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   body: `username=${obj.username}&password=${obj.password}`,
  // });

  // const jsonReq = await req.json();
  // sessionStorage.setItem('access_token', jsonReq.access_token);
  // location.pathname = '/mainpage';
  // console.log('test from loginInfo ' + sessionStorage.access_token);

  const url = 'http://10.130.19.30/api/login/access-token';

  try {
    const fetchAPI = new fetchApi();
    const jsonReq = await fetchAPI.postFetch(url, obj);
    location.pathname = '/mainpage';
  } catch (err) {
    alert(err.message);
    throw err;
  }

  document.getElementById('lds-facebook').style.display = 'none';
}

export default LoginInfo;
