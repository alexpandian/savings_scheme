import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class RouteGuardService implements CanActivate {

  constructor(private authService : AuthService) {  }

  canActivate() : boolean{
  	const token : string = localStorage.getItem('token');
  	if(!token){
  		alert('no token in localstorage');
  		return false;
  	}
  	return this.authService.authendicate();
  }

}
