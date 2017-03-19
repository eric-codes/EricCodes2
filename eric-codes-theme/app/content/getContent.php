<?php 

$ReturnArr = array(
	"workData" => "WORKDATA"
	);

$ProjectReturn = scandir('/');

return json_encode($ReturnArr);

 ?>