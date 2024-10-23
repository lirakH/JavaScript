<?php

session_start();

$server = "localhost";
$username = "root";
$password = "";
$dbname = "databaza10a";

try{
	$con = new PDO("mysql:host=$server;dbname=$dbname", $username, $password);
}
catch (Exeption $e){
	echo "Somthing went wrong! Server not conected!".$e;
}

?>