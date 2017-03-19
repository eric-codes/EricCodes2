<?php 



$ProjectReturn = scandir('./projects/');

$ReturnArr = array(
	"files" => $ProjectReturn
	);

$ReturnJSON = json_encode($ReturnArr);

print_r($ReturnJSON);

return $ReturnJSON;

?>