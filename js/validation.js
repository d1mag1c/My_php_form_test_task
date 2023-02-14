const ENTER_USERNAME = 'Введите имя пользователя';
const WRONG_USERNAME_LANGUAGE = 'Имя пользователя должно содержать только цифры и латинские буквы';
const WRONG_MAX_LENGTH = 'Превышено максимальное количество символов';
const WRONG_MIN_LENGTH = 'Введите не меньше шести символов'
const WRONG_MIN_LENGTH_USERNAME = 'Введите не меньше двух символов'

const ENTER_EMAIL = 'Введите почту';
const WRONG_EMAIL_LANGUAGE = 'Почта должна содержать только цифры и латинские буквы';
const WRONG_EMAIL = 'Почта должна содержать специальный символ @ и домен';

const ENTER_PASSWORD = 'Введите пароль';
const WRONG_PASSWORD_LANGUAGE =
    'Пароль должен состоять только из цифр и латинских букв';
const WRONG_PASSWORD_LENGTH =
    'Пароль должен содержать не менее 6 символов и не более 30 символов';
const WRONG_LETTER_AND_NUMBER =
    'Пароль должен содержать буквы и цифры';
const NOT_ERROR = '';

const _userNameLanguageRegExp = /[a-zA-Z][a-zA-Z0-9-]+$/;
const _emailLanguageRegExp = /^[A-z._@\s\-\d]+$/;
const _emailRegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const _passwordLanguageRegExp = /[^A-Za-z0-9]/;
const _passwordLetterNumber = /(?=.*[a-zA-Z])(?=.*[0-9])/;


export const validateUserName = (user) => {

    if (!user) {
        return ENTER_USERNAME;
    }

    if (user.length > 20) {
        return WRONG_MAX_LENGTH;
    }

    if (user.length < 2) {
        return WRONG_MIN_LENGTH_USERNAME
    }

    return NOT_ERROR;

}

export const validateLogin = (user) => {

    if (!user) {
        return ENTER_USERNAME;
    }

    if (!_userNameLanguageRegExp.test(user)) {
        return WRONG_USERNAME_LANGUAGE;
    }

    if (user.length > 14) {
        return WRONG_MAX_LENGTH;
    }

    if (user.length < 6) {
        return WRONG_MIN_LENGTH
    }

    return NOT_ERROR;

}

export const validateEmail = (email) => {

    if (!email) {
        return ENTER_EMAIL;
    }

    if (!_emailLanguageRegExp.test(email)) {
        return WRONG_EMAIL_LANGUAGE;
    }

    if (!_emailRegExp.test(email)) {
        return WRONG_EMAIL;
    }

    return NOT_ERROR;
}

export const validatePassword = (password) => {

    if (!password) {
        return ENTER_PASSWORD;
    }

    if (password.length < 6) {
        return WRONG_PASSWORD_LENGTH;
    }

    if (password.length > 30) {
        return WRONG_PASSWORD_LENGTH;
    }

    if (_passwordLanguageRegExp.test(password)) {
        return WRONG_PASSWORD_LANGUAGE;
    }

    if (!_passwordLetterNumber.test(password)) {
        return WRONG_LETTER_AND_NUMBER;
    }
    return NOT_ERROR;
}