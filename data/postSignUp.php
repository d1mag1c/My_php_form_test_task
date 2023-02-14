<?php

require 'functions.php';

$userName = trim($_POST['username']);
$login = trim($_POST['login']);
$email = trim($_POST['email']);
$password = trim($_POST['password']);

if ($userName && $login && $email && $password) {

    $password = md5($password . 'sugar');

    $responseUser = [
        'login' => $login,
        'username' => $userName,
        'email' => $email,
        'password' => $password,
    ];

    $checkValues = findLoginAndEmail($jsonArray, $login, $email);

    if (!$checkValues['login'] && !$checkValues['email']) {

        $json = file_get_contents('bd.json');
        $jsonArray = json_decode($json, true);
        $jsonArray[] = $responseUser;
        file_put_contents('bd.json', json_encode($jsonArray, JSON_FORCE_OBJECT));
    }

    echo (json_encode($checkValues));
}
