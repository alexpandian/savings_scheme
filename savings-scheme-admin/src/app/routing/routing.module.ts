import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteGuardService } from '../services/route-guard/route-guard.service';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';
import { CustomersListComponent } from '../customers/customers-list/customers-list.component';

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
		canActivate : [ RouteGuardService ],
		data : {
			text : 'dashboard'
		}
	},

	{
		path : 'customers',
		component : CustomersListComponent,
		canActivate : [ RouteGuardService ],
		data : {
			text : 'customers'
		}
	},

	{
		path      : '**',
		redirectTo : '/dashboard'
	}

]; 

@NgModule({

  declarations : [
  	CustomersListComponent,
  	DashboardComponent
  ],
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
