import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { ContentComponent } from './common/components/content/content.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { CustomersListComponent } from './customers/components/customers-list/customers-list.component';

import { RoutingModule } from './modules/routing/routing.module';
import { AuthorizationInterceptor } from './common/interceptors/authorization.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    CustomersListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthorizationInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
