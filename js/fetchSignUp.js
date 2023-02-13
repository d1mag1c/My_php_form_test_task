import { validateUserName, validateLogin, validateEmail, validatePassword } from './validation.js';
import { sendForm } from './sendForm.js';

const formFetchSignUp = document.querySelector('#form_sign_up');

formFetchSignUp.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(formFetchSignUp);

    let checkUserName = validateUserName(formData.get('username').trim());
    let checkLogin = validateLogin(formData.get('login').trim());
    let checkEmail = validateEmail(formData.get('email').trim());
    let checkPassword = validatePassword(formData.get('password').trim());
    let checkPasswordConfirm = validatePassword(formData.get('password_confirm').trim());

    const spanUserName = document.querySelector('.form_sign_up__span_username');
    const spanLogin = document.querySelector('.form_sign_up__span_login');
    const spanEmail = document.querySelector('.form_sign_up__span_email');
    const spanPassword = document.querySelector('.form_sign_up__span_password');
    const spanPasswordConfirm = document.querySelector('.form_sign_up__span_password_confirm');

    spanLogin.textContent = checkLogin;
    spanPassword.textContent = checkPassword;
    spanUserName.textContent = checkUserName;
    spanEmail.textContent = checkEmail;
    spanPasswordConfirm.textContent = checkPasswordConfirm;

    const spanMessageDifferentPasswords = document.querySelector('.message_different_passwords');

    if (formData.get('password').trim() !== formData.get('password_confirm').trim()) {

        spanMessageDifferentPasswords.classList.add('display_block');

    } else spanMessageDifferentPasswords.classList.remove('display_block')

    if (!checkUserName &&
        !checkLogin &&
        !checkEmail &&
        !checkPassword &&
        !checkPasswordConfirm &&
        formData.get('password').trim() === formData.get('password_confirm').trim()) {

        let result = sendForm(formData, '/data/postSignUp.php')

        result.then(response => {

            if (response.login) {
                spanLogin.textContent = 'Такой login уже существует!'
            }
            if (response.email) {
                spanEmail.textContent = 'Такой email уже существует!'
            }

            if (!response.login && !response.email) {

        

                let regSuccessBlock = document.querySelector('.reg_success_block');
              
                regSuccessBlock.classList.remove('display_none');
                document.querySelector('.button_sign_up').classList.add('disabled_button')
                document.querySelector('.button_sign_in').classList.remove('disabled_button')
                document.querySelector('.form_sign_up').classList.remove('active_form')
                document.querySelector('.form_sign_in').classList.add('active_form')
                document.querySelector('.title_form').textContent = 'Войти'

                setTimeout(() => {

                 regSuccessBlock.classList.add('display_none');
                }, 5000)

                console.log(response)
            }
        })
    }
})