<?php
$server = "localhost"; //serverio vardas
$username = "pogobaras_hostel";      //prisijungimo vardas 
$database = "pogobaras_rez";      //duomenu bazes vardas
$password = "pogopogo1";             //slaptažodis


$con = mysql_connect($server, $username, $password);
if (!$con)
  {
  die("Could not connect: " . mysql_error());
  }
 
$db_selected = mysql_select_db($database, $con);
if (!$db_selected)
  {
  die("Can\'t use DB " . mysql_error());
  } 
  
 mysql_query("SET NAMES utf8"); 
?>
