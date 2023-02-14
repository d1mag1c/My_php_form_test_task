import { validateLogin, validatePassword } from './validation.js';
import { sendForm } from './sendForm.js';

const formFetchSignIn = document.querySelector('#form_sign_in');

formFetchSignIn.addEventListener('submit', (e) => {
    e.preventDefault();


    const formData = new FormData(formFetchSignIn);
    let checkLogin = validateLogin(formData.get('login').trim());
    let checkPassword = validatePassword(formData.get('password').trim());

    const spanLogin = document.querySelector('.form_sign_in__span_login');
    const spanPassword = document.querySelector('.form_sign_in__span_password');

    spanLogin.textContent = checkLogin;
    spanPassword.textContent = checkPassword;

    if (!checkLogin && !checkPassword) {

        let result = sendForm(formData, '/data/postSignIn.php')

        result.then(response => {

            if (!response.login) {
                spanLogin.textContent = 'Такой пользователь не зарегистрирован!'
            }
            if (response.login && !response.password) {
                spanPassword.textContent = 'Неверный пароль!'
            }

            if (response.login && response.password) {

                console.log(response)
                location = '/'

            }

        })
    }
})
