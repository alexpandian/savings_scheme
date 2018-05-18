<?php 
defined('BASEPATH') OR exit('No direct script access is not allowed.');

/**
 * Handles all operations about API response.
 * @author Alex pandian
 */
class Api 
{
	private $CI; // to store codeignitor instance 
	private $response = array() ; //Response array to be sent to client
	
	function __construct()
	{
		$this->CI =& get_instance(); 
		$this->CI->output->set_header('Cache-Control: no-store, no-cache, must-revalidate');
		$this->CI->output->set_header('Cache-Control: post-check=0, pre-check=0');
		$this->CI->output->set_header('Pragma: no-cache');
	}

	private function send_json_response(){
		
		$this->CI->output
		        ->set_content_type('application/json', 'utf-8')
		        ->set_output(json_encode($this->response, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES))
		        ->_display();
		exit;

	}

	public function send_200_response(){
		$this->CI->output->set_status_header(200, 'OK');
		$this->send_json_response();
	}

	public function send_201_response(){
		$this->CI->output->set_status_header(201, 'Created');
		$this->send_json_response();
	}

	public function send_400_response(){
		$this->CI->output->set_status_header(400, 'Bad Request');
		$this->send_json_response();
	}

	public function send_401_response(){
		$this->CI->output->set_status_header(401, 'Unauthorized');
		$this->send_json_response();
	}

	public function send_403_response(){
		$this->CI->output->set_status_header(403, 'Forbidden');
		$this->send_json_response();
	}

	public function send_404_response(){
		$this->CI->output->set_status_header(404, 'Not Found');
		$this->send_json_response();
	}

	public function send_405_response(){
		$this->CI->output->set_status_header(405, 'Not Found');
		$this->send_json_response();
	}

	public function send_500_response(){
		$this->CI->output->set_status_header(500, 'Internal Server Error');
		$this->send_json_response();
	}

	public function send_501_response(){
		$this->CI->output->set_status_header(501, 'Not Implemented');
		$this->send_json_response();
	}

	public function add_to_response( $name, $value){
		$this->response[$name] = $value;
	}

}