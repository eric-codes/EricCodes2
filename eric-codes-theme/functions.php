<?php 

function DispatchMail($args) {

	$headers  = 'From: eric.codes <website@ericcodes.com>' . "\r\n";
	$headers .= 'Reply-To: myWebsite <website@ericcodes.com>';

	$message = "Test is good!";
	$send = wp_mail('hello@ericcodes.com', 'Contact Form: ', $message, $headers);

	return $send;

}

add_action( 'rest_api_init', function(){
	register_rest_route('ericcodes/v1','/send',array(
		'methods' => 'POST',
		'callback' => 'DispatchMail'
		));
});

 ?>