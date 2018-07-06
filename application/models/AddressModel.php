<?php 
defined('BASEPATH') OR exit('No direct script access is not allowed.');

class AddressModel extends CI_Model
{
	private $tableName = 'addresses';
	
	function __construct()
	{
		parent::__construct();
	}

	private function do_joins(){
		$this->db->join('countries', 'countries.country_id = addresses.address_country', 'left');
		$this->db->join('states', 'states.state_id = addresses.address_state', 'left');
		$this->db->join('districts', 'districts.district_id = addresses.address_district', 'left');
	}

	public function person_types(){
		return $person_types = array(
								'employee' => 1,
								'customer' => 2 
							);
	}

	public function add($addressDara){
		$result = $this->db->insert($this->tableName, $addressDara);
		if($result){
			return $this->db->insert_id();
		}else{
			return false;
		}
	}

	public function getAddress($person_id, $person_type){
		$this->db->select(
					array(
						'address_street_1',
						'address_street_2',
						'address_area',
						'address_zip',
						'address_status',
						'countries.country_name as country',
						'states.state_name as state',
						'districts.district_name as district'
					)
				);
		$this->db->from($this->tableName);
		$this->do_joins();
		$this->db->where($this->tableName.'.address_person_id', $person_id);
		$this->db->where($this->tableName.'.address_person_type', $person_type);
		$result = $this->db->get()->result();
		//echo $this->db->last_query();
		return $result; 
	}
}

?>