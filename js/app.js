import Login from '../pages/login/index.js';
import Registration from '../pages/registration/index.js';
import error404 from '../pages/404/index.js';
import error500 from '../pages/500/index.js';
import LoginInfo from './loginInfo/index.js';
import RegistrationInfo from './registrationInfo/index.js';
import mainpage from '../pages/mainpage/index.js';
import mainpageInfo from './mainpageInfo/index.js';
import mainpageExit from './mainpageExit/index.js';
import mainpageAddPostWindow from './mainpageAddPostWindow';
import mainpageAddTaskFetch from './mainpageAddTaskFetch/index.js';
import regexChecker from './loginChecker';

document.getElementById('lds-facebook').style.display = 'none';

const app = document.getElementById('app');

const routes = [
  {
    path: '/404',
    view: error404,
  },
  {
    path: '/',
    view: Login,
  },
  {
    path: '/registration',
    view: Registration,
  },
  {
    path: '/mainpage',
    view: mainpage,
  },
  {
    path: '/500',
    view: error500,
  },
];

const router = async () => {
  let isMatch = routes.map((route) => {
    return {
      route,
      isMatch: route.path === location.pathname,
    };
  });
  let match = isMatch.find((route) => route.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }
  let matchedView = match.route.view;

  app.appendChild(await matchedView());

  const accessToken = sessionStorage.getItem('access_token');

  if (location.pathname === '/') {
    if (sessionStorage.length && accessToken !== 'undefined') {
      location.pathname = '/mainpage';
    }
    document
      .getElementById('loginButton')
      .addEventListener('click', (e) => LoginInfo(e));
  }

  if (location.pathname === '/registration') {
    const registrationForm = document.querySelector('#registration-form');

    const email = document.querySelector('#email');
    const login = document.querySelector('#login');
    const name = document.querySelector('#name');
    const surname = document.querySelector('#surname');
    const phone = document.querySelector('#phone');
    const password = document.querySelector('#password');
    const repeatedPassword = document.querySelector('#repeat-password');

    const emailError = document.querySelector('#wrong-email');
    email.onfocus = (subEventOne) => {
      emailError.hidden = !subEventOne.srcElement.validity.patternMismatch;
    };
    email.onblur = (subEventOne) => {
      emailError.hidden = !subEventOne.srcElement.validity.patternMismatch;
    };

    const loginError = document.querySelector('#wrong-login');
    login.onfocus = (subEventTwo) => {
      const boolCheck = regexChecker(login.value);
      if (boolCheck === false) {
        loginError.hidden = false;
      } else {
        loginError.hidden = true;
      }
    };
    login.onblur = (subEventTwo) => {
      const boolCheck = regexChecker(login.value);
      if (boolCheck === false) {
        loginError.hidden = false;
      } else {
        loginError.hidden = true;
      }
    };

    const nameError = document.querySelector('#wrong-name');
    name.onfocus = (subEventThree) => {
      nameError.hidden = !subEventThree.srcElement.validity.patternMismatch;
    };
    name.onblur = (subEventThree) => {
      nameError.hidden = !subEventThree.srcElement.validity.patternMismatch;
    };

    const surnameError = document.querySelector('#wrong-surname');
    surname.onfocus = (subEventFour) => {
      surnameError.hidden = !subEventFour.srcElement.validity.patternMismatch;
    };
    surname.onblur = (subEventFour) => {
      surnameError.hidden = !subEventFour.srcElement.validity.patternMismatch;
    };

    const phoneError = document.querySelector('#wrong-phone');
    phone.onfocus = (subEventFive) => {
      phoneError.hidden = !subEventFive.srcElement.validity.patternMismatch;
    };
    phone.onblur = (subEventFive) => {
      phoneError.hidden = !subEventFive.srcElement.validity.patternMismatch;
    };

    const passwordError = document.querySelector('#wrong-password');
    password.onfocus = (subEventSix) => {
      passwordError.hidden = !subEventSix.srcElement.validity.patternMismatch;
    };
    password.onblur = (subEventSix) => {
      passwordError.hidden = !subEventSix.srcElement.validity.patternMismatch;
    };

    const repeatedPasswordError = document.querySelector(
      '#wrong-repeated-password'
    );
    repeatedPassword.onfocus = (subEventSeven) => {
      repeatedPasswordError.hidden =
        !subEventSeven.srcElement.validity.patternMismatch;
    };
    repeatedPassword.onblur = (subEventSeven) => {
      repeatedPasswordError.hidden =
        !subEventSeven.srcElement.validity.patternMismatch;
    };

    if (sessionStorage.length && accessToken !== 'undefined') {
      location.pathname = '/';
    }
    document
      .getElementById('regButton')
      .addEventListener('click', (e) => RegistrationInfo(e));
  }

  if (location.pathname === '/mainpage') {
    if (!sessionStorage.length || accessToken === 'undefined') {
      location.pathname = '/';
    } else {
      mainpageInfo();
      document
        .getElementById('mainpageExit')
        .addEventListener('click', () => mainpageExit());
      document
        .getElementById('mainpageAddPost')
        .addEventListener('click', (e) => mainpageAddPostWindow(e));
      document
        .getElementById('add-post-button')
        .addEventListener('click', (e) => mainpageAddTaskFetch(e));
    }
  }
};

window.addEventListener('load', router);
