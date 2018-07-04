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
		$this->load->model('CustomersModel');
	}

	function check_email(){ 
		$email = $this->input->post('email');
		$result = $this->CustomersModel->isEmailAvailable($email);
		if($result){
			$this->api->add_to_response('status',true);
		}else{
			$this->api->add_to_response('status',false);
		}
		$this->api->send_200_response();
	} 
}

?>