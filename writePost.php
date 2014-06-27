<?php
require_once("connectDB.php");

$name = mysql_real_escape_string($_POST["name"]); 
$post = mysql_real_escape_string($_POST["post"]); 

$query = "INSERT INTO taskDB (name, post) VALUES ('$name', '$post')";
$seek = mysql_query($query) or die(mysql_error());
	

?>
