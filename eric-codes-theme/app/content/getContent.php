<?php 



$ProjectReturn = scandir('./projects/');

print_r($ProjectReturn);

$ReturnArr = array(
	"workData" => $ProjectReturn
	);

$ReturnJSON = json_encode($ReturnArr);

print_r($ReturnJSON);

return $ReturnJSON;

?>