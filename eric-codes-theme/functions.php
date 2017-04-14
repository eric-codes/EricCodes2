<?php 

function DispatchMail($args) {


	$headers = 'Reply-To: '. $args->name .' <'. $args->email .'>';

	$message = $args->message; 

	$send = wp_mail('wicstwo@gmail.com', 'Contact Form: ' . $args->name, $message, $headers);

	return $send;

}

add_action( 'rest_api_init', function(){
	register_rest_route('ericcodes/v1','/send',array(
		'methods' => 'POST',
		'callback' => 'DispatchMail'
		));
});

?>