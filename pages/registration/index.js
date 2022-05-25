const Registration = () => {
  const registration = document.createElement('div');

  registration.innerHTML = `
    <form id="registration-form" class="register-form">
      <h2>Registration</h2>
      <input type="text" id="email" class="input-field" placeholder="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="Email — стандартная проверка: латиница, может содержать спецсимволы и
          цифры, обязательно должна быть «собачка» (@) и точка после неё, но
          перед точкой обязательно должны быть буквы" />
      <span id="wrong-email" hidden>Email — стандартная проверка: латиница, может содержать спецсимволы и
        цифры, обязательно должна быть «собачка» (@) и точка после неё, но
        перед точкой обязательно должны быть буквы</span>

      <input type="text" id="login" class="input-field" placeholder="Login" pattern="(?=.*[a-zA-Z-].*)[a-zA-Z0-9-_]+" title="Логин — от 3 до 15 символов, только латиница. Без пробелов, без
      спецсимволов, кроме нижнего подчеркивания и дефиса. Может содержать
      числа, но не полностью состоять из них."/>
      <span id="wrong-login" hidden>Логин — от 3 до 15 символов, только латиница. Без пробелов, без
        спецсимволов, кроме нижнего подчеркивания и дефиса. Может содержать
        числа, но не полностью состоять из них.</span>

      <input type="text" id="name" class="input-field" placeholder="Name" pattern="^[а-яА-ЯёЁa-zA-Z-]{0,}$" title="Имя/Фамилия - латиница или кириллица, не должно быть пробелов и цифр.
          Из спецсимволов допускается только дефис." />
      <span id="wrong-name" hidden>Логин — от 3 до 15 символов, только латиница. Без пробелов, без
        спецсимволов, кроме нижнего подчеркивания и дефиса. Может содержать
        числа, но не полностью состоять из них.</span>

      <input type="text" id="surname" class="input-field" placeholder="Surname" pattern="^[а-яА-ЯёЁa-zA-Z-]{0,}$"
        title="Имя/Фамилия - латиница или кириллица, не должно быть пробелов и цифр.
          Из спецсимволов допускается только дефис." />
      <span id="wrong-surname" hidden>Имя/Фамилия - латиница или кириллица, не должно быть пробелов и цифр.
        Из спецсимволов допускается только дефис.</span>

      <input type="text" id="phone" class="input-field" placeholder="Phone" pattern="[+]?[0-9]{8,15}"
        title="Телефон — от 8 до 15 символов, состоит из цифр, может начинаться с плюса." />
      <span id="wrong-phone" hidden>Телефон — от 8 до 15 символов, состоит из цифр, может начинаться с плюса.</span>

      <input type="text" id="password" class="input-field" placeholder="Password"
        pattern="^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}"
        title="Пароль — от 8 до 30 символов, обязательно хотя бы один спецсимвол и цифра." />
      <span id="wrong-password" hidden>Пароль — от 8 до 30 символов, обязательно хотя бы один спецсимвол и цифра.</span>

      <input type="text" id="repeat-password" class="input-field" placeholder="Repeat password"
        pattern="^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}"
        title="Пароль — от 8 до 30 символов, обязательно хотя бы один спецсимвол и цифра." />
      <span id="wrong-repeated-password" hidden>Пароль — от 8 до 30 символов, обязательно хотя бы один спецсимвол и цифра.</span>

      <button id="regButton" class="button" type="submit">Register</button>
      <span></span>
    </form>
    <div id="loading" hidden>Loading</div>
  `;
  return registration;
};

export default Registration;
