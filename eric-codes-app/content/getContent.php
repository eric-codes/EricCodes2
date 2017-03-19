<?php 



$ProjectReturn = scandir('./projects/');

print_r($ProjectReturn);

$ReturnArr = array(
	"workData" => $ProjectReturn
	);

return json_encode($ReturnArr);

?>