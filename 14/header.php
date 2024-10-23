<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>

	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>

	<div class="container">
	<header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
	  <a href="index.php" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
	    <img src="Logo_white_DigitalSchool.png" width="100px">
	  </a>

	  <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
	    <li><a href="index.php" class="nav-link px-2 link-secondary">Home</a></li>
	    <li><a href="#" class="nav-link px-2 link-dark">Features</a></li>
	    <li><a href="#" class="nav-link px-2 link-dark">Pricing</a></li>
	    <li><a href="#" class="nav-link px-2 link-dark">FAQs</a></li>
	    <li><a href="#" class="nav-link px-2 link-dark">About</a></li>
    <?php 
		require 'config.php';

    	if(!empty($_SESSION['admin']) && $_SESSION['admin'] == true){
    ?>
    	<li><a href="dashboard.php" class="nav-link px-2 link-dark">Dashboard</a></li>
    <?php
    	}
    ?>
	  </ul>

	
<?php
	if(empty($_SESSION['username'])){
?>
	  <div class="col-md-3 text-end">
	    <button type="button" class="btn btn-outline-primary me-2" onclick="window.location.href='login.php';">Login</button>
	    <button type="button" class="btn btn-primary" onclick="window.location.href='signup.php';">Sign-up</button>
	  </div>
<?php
	}else{
?>
	<div class="col-md-3 text-end">
		<button type="button" class="btn btn-outline-primary me-2" onclick="window.location.href='logout.php';">Log Out</button>
	</div>
<?php
	}
?>

	</header>
	</div>

	<main class="min-vh-100 bg-light d-flex-column justify-content-center">
