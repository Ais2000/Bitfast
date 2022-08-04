<?php
include '../db_connect.php';
 

 $reciever = $_REQUEST['reciever'];
 $amount = $_REQUEST['amount'];

 
// Attempt insert query execution
$sql = "INSERT INTO transactions (reciever, amount) VALUES ('$reciever', '$amount')";
if(mysqli_query($conn, $sql)){
    echo "Success";
} 
 
// Close connection
//mysqli_close($conn);
?>