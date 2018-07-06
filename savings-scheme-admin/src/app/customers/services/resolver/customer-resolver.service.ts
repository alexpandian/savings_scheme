import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { map, take } from 'rxjs/operators';

import { CustomersService } from '../customers/customers.service';

@Injectable()
export class CustomerResolverService implements Resolve<any> {

  constructor( 
  				private _customerService : CustomersService,
  				private _router : Router 
  			) { }

  resolve( route : ActivatedRouteSnapshot, state : RouterStateSnapshot ) : Observable<any>{
  	let customerId = route.paramMap.get('id');
  	return this._customerService.getCustomer(customerId).pipe(
  			take(1),
  			map((customer)=>{ 
  				if(customer){
  					return customer;
  				}else{
  					this._router.navigate(['/','customers', 'list']);
  				}
  			})
  		);
  }

}
