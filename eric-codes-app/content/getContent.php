<?php 



$ProjectReturn = scandir('./projects/');

$AllFiles = array();

foreach ($ProjectReturn as $key => $value) {
	if(strpos($value,'json')) {

		$data = file_get_contents('./projects/'.$value);
		$decoded = json_decode($data);
		print_r($decoded);

		array_push($AllFiles,$decoded );
	}
}

$ReturnArr = array(
	"files" => $AllFiles
	);

$ReturnJSON = json_encode($ReturnArr);

print_r($ReturnJSON);

return $ReturnJSON;

?>