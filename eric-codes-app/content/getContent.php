<?php 

$ReturnArr = array(
	"workData" => "WORKDATA"
	);

$ProjectReturn = scandir('./');

print_r($ProjectReturn);

return json_encode($ReturnArr);

 ?>