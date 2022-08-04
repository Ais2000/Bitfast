<?php

//connecting to the database
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
      echo 'db connection success';
  }

//get data from database
$sql = 'SELECT * FROM tb_convert';
$result = mysqli_query($conn, $sql);
$balances = mysqli_fetch_all($result, MYSQLI_ASSOC);
// mysqli_free_result($result);
// mysqli_close($conn);

print_r($balances);

//cycle through the data
$id = '';
$php_balance ='';
$bts_balance ='';
foreach($balances as $balance){
    try{
        $id = $balance['id'];
        $php_balance = $balance['php-bal'];
        $bts_balance = $balance['bts-bal'];
    }
    catch(Exception $e){
        echo $e;
    }
}
?>
