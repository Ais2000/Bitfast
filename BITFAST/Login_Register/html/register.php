<?php

//connecting to database
$dbServerName = 'localhost';
$dbUserName = 'root';
$dbPassword = '';
$dbName = 'db_login_register';

$conn = mysqli_connect($dbServerName, $dbUserName, $dbPassword, $dbName);

//getting user input from register.html

  $username = "";
  $password = "";
  $fullname = "";
  $email = "";
  $phonenumber= "";
foreach ($_POST as $key => $post_var){
  if($key == "username"){
    $username = $post_var; 
  }
  else if($key == "new-password"){
    $password = $post_var;
  }
  else if($key == "fullname"){
    $fullname = $post_var;
  }
  else if($key == "email"){
    $email = $post_var;
  }
  else if($key == "phone-number"){
    $phonenumber = $post_var;
  }
}

$password = md5($password);


//insert data into database 
  if($username != "" || $password != "" || $fullname != "" || $email != "" || $phonenumber != "" ){
    try{
      $sql = "INSERT INTO `tb_users`(`username`, `password`, `name`, `email`, `phone_number`) VALUES ('$username', '$password', '$fullname', '$email', '$phonenumber')";
      if ($conn->query($sql) === TRUE) {
        
        echo "New record created successfully";

        
      } else {

        echo "Error: " . $conn->error;
        

      }
      
      $conn->close();
    }
    catch(Exception $e){
      echo($e);
    }
  }
  
?>