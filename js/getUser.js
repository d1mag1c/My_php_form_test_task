import { getCookie } from '../js/getCookie.js'

const loginBlock = document.querySelector('.user_block__login');
const loginButton = document.querySelector('.user_block__button');
let userFind = getCookie('login');

if (userFind) {
    
    loginBlock.textContent = getCookie('login');
    loginButton.classList.remove('user_off');
    loginButton.classList.add('user_on');
    loginButton.textContent = 'Выйти';

    document.querySelector('.user_on').addEventListener('click', () => {

        document.cookie = 'login=; path=/';
        document.cookie = 'username=; path=/';
        location = '/';
    })

} else {

    loginBlock.textContent = '';
    loginButton.classList.remove('user_on');
    loginButton.classList.add('user_off');
    loginButton.textContent = 'Войти';

    document.querySelector('.user_off').addEventListener('click', () => {

        location = '/pages/registration.php';
    })
}


