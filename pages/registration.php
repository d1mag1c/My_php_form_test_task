<?php require "../blocks/header.php" ?>

<?php if ($_COOKIE["login"]) {
    require "../blocks/helloUser.php";
} else {
    require "../blocks/formBlock.php";
}
?>

<?php require "../blocks/footer.php" ?>