<?php 

$ReturnArr = array();

$ProjectReturn = scandir('projects/');

return json_encode($ProjectReturn);

 ?>