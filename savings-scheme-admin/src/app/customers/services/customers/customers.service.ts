import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

import { Observable } from 'rxjs/Observable';

import { CustomerShortData, customersList } from '../../models/customers.model';

@Injectable()
export class CustomersService {

	private url : string = environment.API_BASE_URL + '/customers'; 

constructor( 
			private _httpClient : HttpClient
			) { }

  getCustomers(): CustomerShortData[]{
  	return customersList;
  }

  checkCustomerEmail(email : string): Observable<any>{
  	return this._httpClient.post(this.url + '/check-email', {email});
  }

}
