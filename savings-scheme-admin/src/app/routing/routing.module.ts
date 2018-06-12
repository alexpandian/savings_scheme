import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteGuardService } from '../services/route-guard/route-guard.service';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';

import { AuthService } from '../services/auth/auth.service';

const routes : Routes = [
	{
		path       : '', 
		redirectTo : '/dashboard',
		pathMatch  : 'full'
	},

	{
		path      :'dashboard',
		component : DashboardComponent,
		canActivate : [ RouteGuardService ]
	},

	{
		path      : '**',
		redirectTo : '/dashboard'
	}

]; 

@NgModule({
  imports: [
  	RouterModule.forRoot(routes, { enableTracing : false })
  ],
  providers : [
  	AuthService,
  	RouteGuardService
  ],
  exports : [
  	RouterModule
  ]
})
export class RoutingModule { }
