<?php 



$ProjectReturn = scandir('./projects/');

$AllFiles = array();

foreach ($ProjectReturn as $key => $value) {
	if(strpos($value,'json')) {

		$data = file_get_contents('./projects/'.$value);
		$dataRmv = substr($data, 3);
		$decoded = json_decode($dataRmv, true);
		print_r($decoded);
		array_push($AllFiles, $decoded);
	}
}

$ReturnArr = array(
	"files" => $AllFiles
	);

$ReturnJSON = json_encode($ReturnArr);

print_r($ReturnJSON);

return $ReturnJSON;

?>