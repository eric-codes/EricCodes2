<?php 



$ProjectReturn = scandir('./projects/');

$ReturnArr = array(
	"workData" => $ProjectReturn
	);

$ReturnJSON = json_encode($ReturnArr);

print_r($ReturnJSON);

return $ReturnJSON;

?>