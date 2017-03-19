<?php 

$ReturnArr = array();

$ProjectReturn = scandir('./');

return json_encode($ProjectReturn);

 ?>