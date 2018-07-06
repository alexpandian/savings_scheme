import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

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

  getLimitedCustomers(requestData : any): Observable<any>{
    return this._httpClient.post( this.url, requestData );
  }

  getCustomer( customerId ) : Observable<any>{
    let params : HttpParams = new HttpParams().set('customer',customerId); 
    return this._httpClient.get(this.url + '/view', { params : params });
  }

  checkCustomerEmail(email : string): Observable<any>{
  	return this._httpClient.post(this.url + '/check-email', email);
  }

  addCustomer(customerData : Object){
  	return this._httpClient.post(this.url + '/add', customerData);
  }

}
