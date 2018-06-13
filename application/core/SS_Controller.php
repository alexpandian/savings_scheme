<?php 
defined('BASEPATH') OR exit('No direct script access allowed.');

/**
 * Basic extension of core CI_controller.
 * This is created because of the naming convention for files and classes in codeignitor. 
 * @package Savings scheme
 * @subpackage  Extended core controller
 * @author Alex pandian
 */
class SS_Controller extends CI_Controller
{
	
	function __construct()
	{
		parent::__construct();
	}
}

/**
 * For API common functions. 
 * @package Savings scheme
 * @subpackage  API controller
 * @author Alex pandian
 */
class Api_Controller extends SS_Controller
{
	
	function __construct()
	{
		parent::__construct();
		$this->load->library('api');
	}
}

/**
 * For Secured API common functions. 
 * @package Savings scheme
 * @subpackage secured API controller
 * @author Alex pandian
 */
class Secured_Api_Controller extends Api_Controller
{
	
	function __construct()
	{
		parent::__construct();
		$this->load->library("JWT");
		$headers = $this->input->request_headers();
		$token = $this->input->server('Authorization');

		$this->api->add_to_response('status',$headers['Authorization']);
		$this->api->send_200_response();
	}
}

/**
 * For public APIs. It does not verify the authenticity of request.
 * @package Savings scheme
 * @subpackage  Public controller
 * @author Alex pandian
 */
class Public_Controller extends Api_Controller
{
	
	function __construct()
	{
		parent::__construct();
	}
}

/**
 * For browser client APIs. It does verify the authenticity of request.
 * For using cookies for authendications, this controller created 
 * @package Savings scheme
 * @subpackage  Admin controller
 * @author Alex pandian
 */
class Admin_Controller extends Secured_Api_Controller
{
	
	function __construct()
	{
		parent::__construct(); 
	}
}

/**
 * For mobile App APIs. It does verify the authenticity of request.
 * @package Savings scheme
 * @subpackage  User controller
 * @author Alex pandian
 */
class User_Controller extends Secured_Api_Controller
{
	
	function __construct()
	{
		parent::__construct();
	}
}

