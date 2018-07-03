<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * handleas the common functionalities
 */
class Common extends Admin_Controller
{
	
	function __construct()
	{
		parent::__construct();
	}

	/**
	* No authendication verification is done here, because authendications has been in parent clsses itself. If authendication fails, even this function wont be called.
	**/
	public function authendicate(){
		$this->api->add_to_response('status',true);
		$this->api->send_200_response();
	} 

	public function countries()
	{
		$this->load->model('Countries');
		$countries = $this->Countries->getCountriesAll();
		$this->api->add_to_response('status', true);
		$this->api->add_to_response('countries', $countries);
		$this->api->send_200_response();
	}
	
}

?>