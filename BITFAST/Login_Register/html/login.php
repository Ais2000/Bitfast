<?php
	if(isset($_GET['login'])){
		
		session_start();
		$dbServerName = 'localhost';
        $dbUserName = 'root';
        $dbPassword = '';
        $dbName = 'db_login_register';

        $conn = mysqli_connect($dbServerName, $dbUserName, $dbPassword, $dbName);
	
		$username=$_GET['username'];
		$password=$_GET['password'];
	    $sql = "SELECT * FROM `tb_users` WHERE `username` = '$username'";
		$query=mysqli_query($conn, $sql);
	
		if (mysqli_num_rows($query) == 0){
			$_SESSION['message']="Login Failed. Password or Username is incorrect!";
			header('location:index.php');
		}
		else{
			$row=mysqli_fetch_array($query);
			
			if (isset($_GET['login'])){
				//set up cookie
				setcookie("user", $row['username'], time() + (86400 * 30), "/"); 
			}
			
			$_SESSION['id']=$row['id'];
			header('location:../../dashboard/dashboard.php');
		}
	}
	else{
		header('location:index.php');
		$_SESSION['message']="Please Login!";
	}
?>