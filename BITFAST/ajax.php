<?php
ob_start();
date_default_timezone_set("Asia/Manila");

$action = $_GET['action'];
include 'admin_class.php';
$crud = new Action(); 


if($action == 'logout'){
	$logout = $crud->logout();
	if($logout)
		echo $logout;
}

ob_end_flush();
?>
