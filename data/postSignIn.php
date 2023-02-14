<?php

require 'functions.php';

$login = trim($_POST['login']);
$password = trim($_POST['password']);

if ($login && $password) {

    $password = md5($password . 'sugar');

    $json = file_get_contents('bd.json');
    $jsonArray = json_decode($json, true);

    $checkValues = findValue($jsonArray, $login, $password);

    if ($checkValues['login'] && $checkValues['password']) {

        setcookie('username', $checkValues['username'],  time() + 86400,  "/");
        setcookie('login', $login,  time() + 86400,  "/");

    }


    echo (json_encode($checkValues));
}
