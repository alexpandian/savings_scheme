import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CustomerShortData, customersList } from '../../models/customers.model';

@Injectable()
export class CustomersService {

	paginationOptions : object = {
		sort : 'id',
		start : 0,
		noOfRecords :  5
	};

  constructor() { }

  getCustomers(): CustomerShortData[]{
  	return customersList;
  }

}
