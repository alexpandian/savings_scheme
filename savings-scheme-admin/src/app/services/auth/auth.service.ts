import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor( private http : HttpClient ) { }

  authendicate(): boolean{
  	this.http.get('http://localhost/savings_scheme/admin/check').subscribe((response)=>{
  		console.log(response);
  	});
  	return true;
  }

}
