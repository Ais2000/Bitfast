<?php

include "../db_connect.php"; // Using database connection file here
if(isset($_POST['update'])) // when click on Update button
{
    $peso = $_POST['peso'];
    $receiver = $_POST['receiver'];
  
    $edit = mysqli_query($conn,"update php_wallet set php_balance=php_balance-$peso where username='$currentUser'");

    $edit2 = mysqli_query($conn,"update php_wallet set php_balance=php_balance+$peso where username='$receiver'");

    unset($_POST);
    header("Location: /dashboard/dashboard.php");
    exit;
}
?>