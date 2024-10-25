<?php

	require 'config.php';

	if (empty($_SESSION['admin']) || $_SESSION['admin'] == false) {
		header("Location: login.php");
	}

	include 'header.php';

	$getUsers = $con->prepare("SELECT * FROM users");
	$getUsers->execute();
	$users = $getUsers->fetchAll();
?>

<h1>Dashboard</h1>



<?php
	include "footer.php";
?>