<?php 
defined('BASEPATH') OR exit('No direct script access is not allowed.');

/**
 * Accesser of states table
 */
class States extends CI_Model
{
	private $tableName = 'states';
	
	function __construct()
	{
		parent::__construct();
	}

	public function getStates($country_id)
	{

		$this->db->select(
							array('state_name','state_id')
						);
		$this->db->where('state_status', "1");
		$this->db->where('country_id', $country_id);
		$states = $this->db->get($this->tableName)->result_array();
		return $states;
	}
}

?>