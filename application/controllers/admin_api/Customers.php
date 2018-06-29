<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * 
 */
class Customers extends Admin_Controller
{
	
	function __construct()
	{
		parent::__construct();
	}

	function check_email(){
		$this->api->add_to_response('status',false);
		$this->api->send_200_response();
	} 
}

?>