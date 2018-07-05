<?php 
defined('BASEPATH') OR exit('No direct script access is not allowed.');

class CustomersModel extends CI_Model
{
	private $tableName = 'customers';
	
	function __construct()
	{
		parent::__construct();
	}

	public function isEmailAvailable($email)
	{
		$this->db->select('*');
		$this->db->where('customer_status', "1");
		$this->db->where('customer_email', $email);
		$customers = $this->db->get($this->tableName)->result_array();
		return $customers;
	}

	public function add($customerDara){
		$result = $this->db->insert($this->tableName, $customerDara);
		if($result){
			return $this->db->insert_id();
		}else{
			return false;
		}
	}
}

?>