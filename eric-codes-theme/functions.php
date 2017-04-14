<?php 

function DispatchMail($args) {

	$message = "Test is good!";

	$send = wp_mail('wicstwo@gmail.com', 'Contact Form: ', $message);

	return $send;

}

add_action( 'rest_api_init', function(){
	register_rest_route('ericcodes/v1','/send',array(
		'methods' => 'POST',
		'callback' => 'DispatchMail'
		));
});

 ?>