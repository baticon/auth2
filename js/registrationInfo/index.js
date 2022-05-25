import fetchApi from '../service/index.js';

async function RegistrationInfo(e) {
  e.preventDefault();

  document.getElementById('lds-facebook').style.display = 'inline';

  const emailValue = document.querySelector('#email').value;
  const loginValue = document.querySelector('#login').value;
  const nameValue = document.querySelector('#name').value;
  const surnameValue = document.querySelector('#surname').value;
  const phoneValue = document.querySelector('#phone').value;
  const passwordValue = document.querySelector('#password').value;
  const repeatedPasswordValue =
    document.querySelector('#repeat-password').value;

  const obj = {
    email: `${emailValue}`,
    username: `${loginValue}`,
    first_name: `${nameValue}`,
    last_name: `${surnameValue}`,
    telephone: `${phoneValue}`,
    password: `${passwordValue}`,
  };

  try {
    const url = 'http://10.130.19.30/api/register/';
    const fetchAPI = new fetchApi();
    const jsonReq = await fetchAPI.postFetchReg(url, obj);
  } catch (err) {
    alert(err.message);
    throw err;
  }

  document.getElementById('lds-facebook').style.display = 'none';
}

export default RegistrationInfo;
