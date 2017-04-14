<?php 

function DispatchMail($args) {

	$message = "Test is good!";
	wp_mail('hello@ericcodes.com', 'Contact Form: ', $message);

	return 'success';

}

add_action( 'rest_api_init', function(){
	register_rest_route('ericcodes/v1','/send',array(
		'methods' => 'POST',
		'callback' => 'DispatchMail'
		));
});

 ?>