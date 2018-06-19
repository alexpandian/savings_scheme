import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RouteGuardService } from '../../common/services/route-guard/route-guard.service';
import { DashboardComponent } from '../../dashboard/components/dashboard/dashboard.component';
import { CustomersListComponent } from '../../customers/components/customers-list/customers-list.component';

import { AuthService } from '../../common/services/auth/auth.service';

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
			title : 'dashboard'
		}
	},

	{
		path : 'customers',
		component : CustomersListComponent,
		canActivate : [ RouteGuardService ],
		data : {
			title : 'customers'
		}
	},

	{
		path      : '**',
		redirectTo : '/dashboard'
	}

]; 

@NgModule({

  declarations : [
  	
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
