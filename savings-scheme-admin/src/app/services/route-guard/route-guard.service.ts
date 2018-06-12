import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class RouteGuardService implements CanActivate {

  constructor(private authService : AuthService) {  }

  canActivate() : boolean{
  	return this.authService.authendicate();
  }

}
