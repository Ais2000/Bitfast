<?php
session_start();
ini_set('display_errors', 1);
Class Action {

	public function __construct() {
		ob_start();
   	include 'db_connect.php';
    
    $this->db = $conn;
	}
	function __destruct() {
	    $this->db->close();
	    ob_end_flush();
	}

    function logout(){
		session_destroy();
		header("location:Login_Register/html/landingpage.html");
	}

}
