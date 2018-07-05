<?php 
defined('BASEPATH') OR exit('No direct script access is not allowed.');

class AddressModel extends CI_Model
{
	private $tableName = 'addresses';
	
	function __construct()
	{
		parent::__construct();
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
}

?>