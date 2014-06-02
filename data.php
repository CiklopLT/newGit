<?php 
include("connectDB.php");

$query = "SELECT Slapyvardis FROM totalizatorius WHERE Vardas = 'Jonas'";
$seek = mysql_query($query) or die(mysql_error());
$row = mysql_fetch_array($seek);

echo $row[0];
?>
