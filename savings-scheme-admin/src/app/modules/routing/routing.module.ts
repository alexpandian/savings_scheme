/* 
	* Angular imports 
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*
	* custom services imports 
*/ 
import { AuthService } from '../../common/services/auth/auth.service';

/*
	* custom components imports 
*/
import { RouteGuardService } from '../../common/services/route-guard/route-guard.service';
import { DashboardComponent } from '../../dashboard/components/dashboard/dashboard.component';
import { CustomersComponent } from '../../customers/components/customers/customers.component';
import { CustomersListComponent } from '../../customers/components/customers-list/customers-list.component';
import { CustomerAddComponent } from '../../customers/components/customer-add/customer-add.component';
import { CustomerEditComponent } from '../../customers/components/customer-edit/customer-edit.component';
import { CustomerViewComponent } from '../../customers/components/customer-view/customer-view.component';


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
		component : CustomersComponent,
		canActivate : [ RouteGuardService ],
		data : {
			title : 'customers'
		},
		children : [
			{
				path : 'list',
				component : CustomersListComponent,
				canActivate : [ RouteGuardService ],
				data : {
					title : 'All Customers'
				}
			},
			{
				path : 'view/:id',
				component : CustomerViewComponent,
				canActivate : [ RouteGuardService ],
				data : {
					title : 'Vew Customer'
				}
			},
			{
				path : 'add',
				component : CustomerAddComponent,
				canActivate : [ RouteGuardService ],
				data : {
					title : 'Add Customer'
				}
			},
			{
				path : 'edit',
				component : CustomerAddComponent,
				canActivate : [ RouteGuardService ],
				data : {
					title : 'Edit Customer'
				}
			},
			{
				path : '',
				redirectTo : 'list',
				pathMatch : 'full'
			}
		]
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
