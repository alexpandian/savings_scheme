import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

import { Observable } from 'rxjs/observable';
import { map } from 'rxjs/operators/map';

import { Countries, States, Districts } from './address.model';

@Injectable()
export class AddressService {
	private countriesUrl : string = environment.API_BASE_URL + '/countries';
  private statesUrl : string = environment.API_BASE_URL + '/states'; 
  private districtsUrl : string = environment.API_BASE_URL + '/districts';
  constructor(
  				private _httpClient : HttpClient
  			) { }

  getCountries():Observable<Countries[]>{
  	return this._httpClient.get(this.countriesUrl).map((response : any) => {
  		let countries = response.countries;
  		return countries;
  	});
  }

  getStates( countryId ):Observable<States[]>{
    let stateParams : HttpParams = new HttpParams().set( 'country', countryId );

    return this._httpClient.get(this.statesUrl, {params : stateParams})
    .map((response : any) => {
      let states = response.states;
      return states;
    });
  }

  getDistricts( steteId ):Observable<Districts[]>{
    let districtParams : HttpParams = new HttpParams().set( 'state', steteId );
    return this._httpClient.get(this.districtsUrl, { params : districtParams }).map((response : any) => {
      let districts = response.districts;
      return districts;
    });
  }
}
