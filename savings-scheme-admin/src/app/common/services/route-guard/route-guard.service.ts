import { Injectable } from '@angular/core';
import { 
			CanActivate, 
			CanActivateChild,
			ActivatedRouteSnapshot,
			RouterStateSnapshot
	   } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable } from "rxjs/Observable"; 

import "rxjs/add/operator/map"; 
import "rxjs/add/operator/catch"; 
import 'rxjs/add/observable/throw';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class RouteGuardService implements CanActivate, CanActivateChild {

  constructor(private authService : AuthService) {  }

  canActivate( route : ActivatedRouteSnapshot, state : RouterStateSnapshot ) : Observable<boolean>{
  	const token : string = localStorage.getItem('token');
  	if(!token){
  		alert('no token in localstorage');
  		//return false;
  	}
  	return this.authService.authendicate()
		.map((response)=>{
			if(response.status == true){
	  			return true;
	  		}else{
	  			return false;
	  		}
	  	})
		.catch((error:any) => {
			alert('Unauthorized');
			return Observable.throw('')
		});
  }

  canActivateChild( route : ActivatedRouteSnapshot, state : RouterStateSnapshot ) : Observable<boolean>{
  	const token : string = localStorage.getItem('token');
  	if(!token){
  		alert('no token in localstorage');
  		//return false;
  	}
  	return this.authService.authendicate()
		.map((response)=>{
			if(response.status == true){
	  			return true;
	  		}else{
	  			return false;
	  		}
	  	})
		.catch((error:any) => {
			alert('Unauthorized');
			return Observable.throw('')
		});
  }

}
