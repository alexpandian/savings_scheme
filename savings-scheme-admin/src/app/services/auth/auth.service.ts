import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor( private http : HttpClient ) { }

  authendicate(): Observable<any>{
  	return this.http.get('http://localhost/savings_scheme/admin/authendicate');
  }

}
