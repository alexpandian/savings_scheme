import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { CustomerShortData, customersList } from '../../models/customers.model';

@Injectable()
export class CustomersService {

	private url : string = ''; 

	private options : object = {
		responseType : 'json'
	};

	paginationOptions : object = {
		sort : 'id',
		start : 0,
		noOfRecords :  5
	};

  constructor( private _httpClient : HttpClient ) { }

  getCustomers(): CustomerShortData[]{
  	return customersList;
  }

  checkCustomerEmail(): Observable<any>{
  	return this._httpClient.post(this.url, this.options);
  }

}
