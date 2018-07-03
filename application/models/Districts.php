<?php 
defined('BASEPATH') OR exit('No direct script access is not allowed.');

/**
 * Accesser of Districts table
 */
class Districts extends CI_Model
{
	private $tableName = 'districts';
	
	function __construct()
	{
		parent::__construct();
	}

	public function getDistricts($state_id)
	{

		$this->db->select(
							array('district_name','district_id')
						);
		$this->db->where('district_status', "1");
		$this->db->where('state_id', $state_id);
		$districts = $this->db->get($this->tableName)->result_array();
		return $districts;
	}
}

?>