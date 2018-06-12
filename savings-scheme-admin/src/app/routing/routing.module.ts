import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';

const routes : Routes = [
	{
		path       : '', 
		redirectTo : '/dashboard',
		pathMatch  : 'full'
	},

	{
		path      :'dashboard',
		component : DashboardComponent,
		canActivate : [ true ]
	},

	{
		path      : '**',
		redirectTo : '/dashboard'
	}

]; 

@NgModule({
  imports: [
  	RouterModule.forRoot(routes, { enableTracing : true })
  ],
  exports : [
  	RouterModule
  ]
})
export class RoutingModule { }
