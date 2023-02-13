const buttonSignIn = document.querySelector('.button_sign_in')
const buttonSignUp = document.querySelector('.button_sign_up')
const formSignIn = document.querySelector('.form_sign_in')
const formSignUp = document.querySelector('.form_sign_up')

buttonSignUp.addEventListener('click', function() {
    buttonSignUp.classList.remove('disabled_button')
    buttonSignIn.classList.add('disabled_button')
    formSignUp.classList.add('active_form')
    formSignIn.classList.remove('active_form')
    document.querySelector('.title_form').textContent = 'Регистрация'
})

buttonSignIn.addEventListener('click', function() {
    buttonSignIn.classList.remove('disabled_button')
    buttonSignUp.classList.add('disabled_button')
    formSignIn.classList.add('active_form')
    formSignUp.classList.remove('active_form')
    document.querySelector('.title_form').textContent = 'Войти'
})