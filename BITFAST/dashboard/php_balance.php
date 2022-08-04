<?php
  include "dbConnect.php";
  
  $sql = "SELECT * FROM `php_wallet` WHERE username = '$currentUser'";
  $result = $conn->query($sql);
  
  while($row = $result->fetch_assoc()) {
    echo "PHP " . $row["php_balance"];
  }
 exit;
?>