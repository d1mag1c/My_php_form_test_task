<?php require "../blocks/header.php" ?>

<section class="form_block">
    <div class="reg_success_block display_none"><p>Спасибо за регистрацию! Теперь вы можете войти как пользователь!</p></div>
    <div class="wrapper">
        <h1 class="title_form">Войти</h1>
        <div class="wrapper__form">
            <?php require "../blocks/signIn.php" ?>
            <?php require "../blocks/signUp.php" ?>
        </div>
        <div class="buttons_block">
            <button class="button_sign_in">Войти</button>
            <button class="button_sign_up disabled_button">Регистрация</button>
        </div>
    </div>

</section>

<script type="module" src="../js/script.js"></script>
<?php require "../blocks/footer.php" ?>