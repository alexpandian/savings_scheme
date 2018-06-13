<?php
defined('BASEPATH') OR exit('No direct script access allowed.');

/**
 * Handles public APIs regarding Admin. Do not validate authendication.
 * Created for login purpose. 
 * @author Alex pandian
 */
class Admin_api_controller extends Public_controller
{
	
	function __construct()
	{
		parent::__construct();
	}

	public function login(){
		$this->api->add_to_response('status','ok');
		$this->api->send_200_response();
	}

	public function generate_dummy_token(){
		$this->load->library('JWT');
		$token = $this->jwt->encode([]);
		$this->api->add_to_response('token', $token);
		$this->api->send_200_response();
	}

}
 