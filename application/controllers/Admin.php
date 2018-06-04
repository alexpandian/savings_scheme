<?php 
defined('BASEPATH') OR exit('No direct script access allowed.');

/**
 * 
 */
class Admin extends SS_Controller
{
	
	function __construct()
	{
		parent::__construct();
		$this->load->library('JWT');
	}

	public function login(){
		$this->load->view('admin/login_view');
	}

	public function app(){
		$this->load->view('admin/app');
	}
}