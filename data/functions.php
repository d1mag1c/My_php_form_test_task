<?php

$json = file_get_contents('bd.json');
$jsonArray = json_decode($json, true);

function findValue($jsonArray, $loginValue, $passwordValue)
{
    $login = false;
    $password = false;
    $userName = '';

    foreach ($jsonArray as $i) {

        if ($i['login'] === $loginValue) {

            $login = true;

            if ($login && $passwordValue === $i['password']) {

                $password = true;
                $userName = $i['username'];

            }
        }
    }
    return ['login' => $login, 'password' => $password, 'username' => $userName];
};

function findLoginAndEmail($jsonArray, $loginValue, $emailValue)
{

    $login = false;
    $email = false;

    foreach ($jsonArray as $i) {
        if ($i['login'] === $loginValue) {

            $login = true;
        }
        if ($i['email'] === $emailValue) {

            $email = true;
        }
    }


    return ['login' => $login, 'email' => $email];
};

// var_dump(findValue($jsonArray, 'truantt', 'sadd'));


// $families = [["Tom", "Alice"], ["Bob", "Kate"]];
// var_dump($families[0]);  // Array ( [0] => Tom [1] => Alice )
