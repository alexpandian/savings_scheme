<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * 
 */
class Customers extends Admin_Controller
{
	
	function __construct()
	{
		parent::__construct();
		$this->load->model('CustomersModel');
	}

	function check_email(){ 
		$email = $this->input->raw_input_stream;
		$result = $this->CustomersModel->isEmailAvailable($email);
		if($result){
			$this->api->add_to_response('status',true);
		}else{
			$this->api->add_to_response('status',false);
		}
		$this->api->send_200_response();
	} 

	public function add()
	{
		$customer_data_input = json_decode($this->input->raw_input_stream);
		$is_email_available = $this->CustomersModel->isEmailAvailable($customer_data_input->email);
		if($is_email_available){
			$this->api->add_to_response('status', false);
			$this->api->add_to_response('message','Email available.Enter different email.');
			$this->api->send_200_response();
		}else{
			$customer_data_basic = array(
										'customer_name' => $customer_data_input->name,
										'customer_mobile' => $customer_data_input->mobile,
										'customer_email' => $customer_data_input->email,
										'customer_password' => md5($customer_data_input->credentials->password),
										'customer_status' => 1,
										'customer_added_date' => date('Y-m-d H:i:s'),
										'customer_updated_date' => date('Y-m-d H:i:s'),

									);
			$customer_id = $this->CustomersModel->add($customer_data_basic);
			if($customer_id){
				$this->load->model('AddressModel');
				$person_types = $this->AddressModel->person_types();
				$address_data = array(
									'address_person_id' => $customer_id,
									'address_person_type' => $person_types['customer'],
									'address_street_1' => $customer_data_input->address->street_1,
									'address_street_2' => $customer_data_input->address->street_2,
									'address_area' => $customer_data_input->address->area,
									'address_district' => $customer_data_input->address->district,
									'address_state' => $customer_data_input->address->state,
									'address_country' => $customer_data_input->address->country,
									'address_zip' => $customer_data_input->address->pincode,
									'address_status' => 1,
									'address_added_date' => date('Y-m-d H:i:s'),
									'address_modified_date' => date('Y-m-d H:i:s')
								);
				$this->AddressModel->add($address_data);
				$this->api->add_to_response('customer', $customer_id);
				$this->api->add_to_response('status', true);
				$this->api->send_200_response();
			}else{
				$this->api->add_to_response('status', false);
				$this->api->send_200_response();
			}
		}
	}

	public function view(){
		$customer_id = $this->input->get("customer");
		if($customer_id){
			$customer = array();
			$customer_basic_data = $this->CustomersModel->getCustomer($customer_id);
			if($customer_basic_data){
				
				$this->load->model('AddressModel');
				$person_types = $this->AddressModel->person_types();
				$customer_address_data = $this->AddressModel->getAddress($customer_id, $person_types['customer']);

				$customer['basic'] = $customer_basic_data[0];
				$customer['address'] = $customer_address_data;

	  			$this->api->add_to_response('customer', $customer);
	  			$this->api->add_to_response('status', true);
	  			$this->api->send_200_response();
			}else{
				$this->api->send_404_response();
			}
		}else{
			$this->api->send_400_response();
		}
	} 

	public function customers_limited(){
		$search_data_input = json_decode($this->input->raw_input_stream);
		$customers = $this->CustomersModel->getLimitedCustomers($search_data_input);
		$this->api->add_to_response('customers',$customers);
		$this->api->add_to_response('status',true);
		$this->api->send_200_response();
	}
}

?>