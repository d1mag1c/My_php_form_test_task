<?php

require 'functions.php';

$userName = $_POST['username'];
$login = $_POST['login'];
$email = $_POST['email'];


if ($userName && $login && $email && $_POST['password']) {

    $password = md5($_POST['password'] . 'sugar');

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
