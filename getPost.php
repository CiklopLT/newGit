<?php
require_once("connectDB.php");

$query = "SELECT * FROM taskDB";
$seek = mysql_query($query) or die(mysql_error());

while($row = mysql_fetch_array($seek))
	{	
		$name[] = $row['name'];
		$post[] = $row['post'];
		$post_time[] = $row['post_time'];
	}
	
array_multisort($post_time, $post, $name);
	
echo json_encode(array(
   'name' => $name,
   'post' => $post,
   'post_time' => $post_time
));		

?>
