<?php 
defined('BASEPATH') OR exit('No direct script access is not allowed.');

/**
 * Accesser of countries table
 */
class countries extends CI_Model
{
	private $tableName = 'countries';
	
	function __construct()
	{
		parent::__construct();
	}

	public function getCountriesAll()
	{

		$this->db->select(
							array('country_name','country_id','country_code')
						);
		$this->db->where('country_status', "1");
		$countires = $this->db->get($this->tableName)->result_array();
		return $countires;
	}
}

?>