<?php 



$ProjectReturn = scandir('./projects/');

$AllFiles = array();

foreach ($ProjectReturn as $key => $value) {
	if(strpos($value,'json')) {

		$data = file_get_contents('./projects/'.$value);

		array_push($AllFiles, json_decode($data));
	}
}

$ReturnArr = array(
	"files" => $AllFiles
	);

$ReturnJSON = json_encode($ReturnArr);

print_r($ReturnJSON);

return $ReturnJSON;

?>