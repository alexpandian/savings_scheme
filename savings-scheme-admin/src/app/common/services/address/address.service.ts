import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

import { Observable } from 'rxjs/observable';
import { map } from 'rxjs/operators/map';

import { Countries } from './address.model';

@Injectable()
export class AddressService {
	private url : string = environment.API_BASE_URL + '/countries'; 
  constructor(
  				private _httpClient : HttpClient
  			) { }

  getCountries():Observable<Countries[]>{
  	return this._httpClient.get(this.url).map((response : any) => {
  		let countries = response.countries;
  		return countries;
  	});
  }
}
