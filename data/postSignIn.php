<?php

require 'functions.php';

$login = $_POST['login'];


if ($login && $_POST['password']) {

    $password = md5($_POST['password'] . 'sugar');

    $json = file_get_contents('bd.json');
    $jsonArray = json_decode($json, true);

    $checkValues = findValue($jsonArray, $login, $password);

    if ($checkValues['login'] && $checkValues['password']) {

        setcookie('username', $checkValues['username'],  time() + 86400,  "/");
        setcookie('login', $login,  time() + 86400,  "/");

    }


    echo (json_encode($checkValues));
}
