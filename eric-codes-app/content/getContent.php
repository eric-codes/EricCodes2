<?php 



$ProjectReturn = scandir('./projects/');

$AllFiles = array();

foreach ($ProjectReturn as $key => $value) {
	if(strpos($value,'json')) {

		$data = file_get_contents('./projects/'.$value);
		$decoded = json_decode($data, true);
		array_push($AllFiles, $decoded);
	}
}


$ReturnJSON = json_encode($AllFiles);

print_r($ReturnJSON);

return $ReturnJSON;

?>