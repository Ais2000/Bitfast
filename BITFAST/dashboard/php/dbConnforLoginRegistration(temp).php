<?php
//getting user input from register.html
echo 'connected';

$username = "";
$password = "";
$fullname = "";
$email = "";
$phonenumber= "";
foreach ($_POST as $key => $post_var){
  if($key == "username"){
    $username = $post_var; 
  }
  else if($key == "password"){
    $password = $post_var;
  }
  else if($key == "name"){
    $fullname = $post_var;
  }
  else if($key == "email"){
    $email = $post_var;
  }
  else if($key == "number"){
    $phonenumber = $post_var;
  }
}

echo("USERNAME: $username");
echo("PASSWORD: $password");
echo("EMAIL: $email" );
echo("FULL NAME: $fullname");
echo("PHONE NUMBER: $phonenumber");

//connecting to database

$dbServerName = 'localhost';
$dbUserName = 'root';
$dbPassword = '';
$dbName = 'db_bitshares';

$conn = mysqli_connect($dbServerName, $dbUserName, $dbPassword, $dbName);

//check connection
if(!$conn){
    echo 'Connection Error' . mysqli_connect_error();
  }
  else{

  }

//insert data into database 
  if($username != "" || $password != "" || $fullname != "" || $email != "" || $phonenumber != "" ){
    try{
      $sql = "INSERT INTO tb_users(name, username, password, phone_number, email) VALUES (?, ?, ?, ?, ?)";
      $stmt = $conn->prepare($sql);
      $stmt->bind_param("sssis", $fullname, $username, $password, $phonenumber, $email);
      $stmt->execute();
    }
    catch(Exception $e){
      echo($e);
    }
  }
?>