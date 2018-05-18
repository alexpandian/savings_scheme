<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Handles public APIs regarding user. Do not validate authendication.
 * Created for login purpose. 
 * @author Alex pandian
 */
class User_api_controller extends Api_Controller
{
	
	function __construct()
	{
		
	}

	public function login(){
		echo "user";
	}
}
