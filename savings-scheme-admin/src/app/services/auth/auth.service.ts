import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor( private http : HttpClient ) { }

  authendicate(): boolean{
  	this.http.get('http://localhost:4200',{ responseType : 'text' }).subscribe((respose)=>{
  		console.log(respose);
  	});
  	return true;
  }

}
