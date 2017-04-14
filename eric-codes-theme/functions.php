<?php 

function DispatchMail($args) {

	return 'Test is good';

}

add_action( 'rest_api_init', function(){
	register_rest_route('ericcodes/v1','/send',array(
		'methods' => 'POST',
		'callback' = 'DispatchMail'
		))
});

 ?>