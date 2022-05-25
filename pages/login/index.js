const Login = () => {
  const login = document.createElement('div');

  login.innerHTML = `
  <form id='login-form' class='login-form'>
  <h2>Login</h2>
  <input
    type='text'
    id='login'
    class='input-field'
    placeholder='Login'
    pattern='(?=.*[a-zA-Z-].*)[a-zA-Z0-9-_]+'
    title='Логин — от 3 до 15 символов, только латиница. Без пробелов, без
    спецсимволов, кроме нижнего подчеркивания и дефиса. Может содержать
    числа, но не полностью состоять из них.'
  />
  <span id='wrong-login' hidden>
    Логин — от 3 до 15 символов, только латиница. Без пробелов, без
    спецсимволов, кроме нижнего подчеркивания и дефиса. Может содержать числа,
    но не полностью состоять из них.
  </span>
  <input
    type='password'
    id='password'
    class='input-field'
    placeholder='Password'
    pattern='^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}'
    title='Пароль — от 8 до 30 символов, обязательно хотя бы один спецсимвол и цифра.'
  />
  <span id='wrong-password' hidden>
    Пароль — от 8 до 30 символов, обязательно хотя бы один спецсимвол и цифра.
  </span>
  <button id="loginButton" class='button'>Enter</button>
  <a href='/registration'>No account? Register</a>
  <span></span>
</form>
`;
  return login;
};

export default Login;
