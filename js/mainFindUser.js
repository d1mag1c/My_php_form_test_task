import { getCookie } from '../js/getCookie.js'

const mainUser = document.querySelector('.main__user');
const mainOffline = document.querySelector('.main__offline');
let userFind = getCookie('username');

if(userFind) {
    mainUser.textContent = 'Hello, ' + userFind + '!';
    mainOffline.classList.add('display_none')
    mainUser.classList.remove('display_none');
} else {

    mainUser.classList.add('display_none');
    mainOffline.classList.remove('display_none')
    document.querySelector('.main__button').addEventListener('click', () => {
        location = 'pages/registration.php';
    })

}