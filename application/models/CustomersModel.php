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

	public function getCustomer($customer_id){
		$this->db->select(
						array(
							'customer_name',
							'customer_mobile',
							'customer_email',
							'customer_status',
							'customer_added_date'
						)
					);
		$this->db->where('customer_id', $customer_id);
		$result = $this->db->get($this->tableName)->row();
		return $result;
	}

	public function getLimitedCustomers($search_data){
		$sort_array = (array) $search_data->sort;
		$search_array = (array) $search_data->search;
		$this->db->select(
						array(
							'customer_id',
							'customer_name',
							'customer_mobile',
							'customer_email',
							'customer_status',
							'customer_added_date'
						)
					);
		if($search_array){
			foreach ($search_array as $search_key => $search_value) {
				if($search_value != ""){
					if($search_key == 'customer_status'){
						$this->db->where($search_key, $search_value);
					}else{
						$this->db->like($search_key, $search_value);
					}
				}
			}
		}
		foreach ($sort_array as $sort_key => $sort_value) {
			$this->db->order_by($sort_key, $sort_value);
		}
		$this->db->limit( $search_data->noOfrecords, $search_data->start );
		$result = $this->db->get($this->tableName)->result();
		return $result;
	}

	public function getLimitedCustomersCount($search_data){
		$search_array = (array) $search_data->search;
		if($search_array){
			foreach ($search_array as $search_key => $search_value) {
				if($search_value != ""){
					if($search_key == 'customer_status'){
						$this->db->where($search_key, $search_value);
					}else{
						$this->db->like($search_key, $search_value);
					}
				}
			}
		}
		$this->db->from($this->tableName);
		$count = $this->db->count_all_results();
		return $count;
	}
}

?>