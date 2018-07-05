import { Injectable } from '@angular/core';
import { 
			ValidatorFn, 
			AsyncValidatorFn, 
			AbstractControl,
			ValidationErrors,
			FormGroup 
		} from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { CustomersService } from '../customers/customers.service';

@Injectable()
export class CustomerValidatorService {

  constructor( private _customerService : CustomersService ) { }

  validateEmail():AsyncValidatorFn{
		return (control : AbstractControl): Observable<{[key:string]:any} | null> => {
			return this._customerService.checkCustomerEmail(control.value).map((response)=>{
				if(response.status == true){
					return { emailTaken : { value : true} };
				}else{
					return null;
				}
			});
		}
	}

	validatePassword(formGroup : FormGroup) : ValidationErrors | null{
		let password = formGroup.get('password').value;
		let confirmPassword = formGroup.get('confirmPassword').value;
		if( password === confirmPassword ){
			return null;
		}else{
			return { 'passwordMismatch' : true };
		}
	}

}
