<?php include_once 'header.php'; ?>
		
	<h1>Bootstrap</h1>

<?php

	if(!empty($_SESSION['username'])){
		echo "Hello, ".$_SESSION['username'];

		echo "<br><a href='logout.php'>Log out</a>";
	}

?>

<?php include_once 'footer.php'; ?>
	