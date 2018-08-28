import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomersService } from './customers/services/customers/customers.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { ContentComponent } from './common/components/content/content.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { CustomersListComponent } from './customers/components/customers-list/customers-list.component';

import { RoutingModule } from './modules/routing/routing.module';
import { AuthorizationInterceptor } from './common/interceptors/authorization.interceptor';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { CustomerAddComponent } from './customers/components/customer-add/customer-add.component';
import { CustomerViewComponent } from './customers/components/customer-view/customer-view.component';
import { CustomerEditComponent } from './customers/components/customer-edit/customer-edit.component';
import { CustomersComponent } from './customers/components/customers/customers.component';
import { EditSaveDirective } from './common/directives/edit-save/edit-save.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    CustomersListComponent,
    DashboardComponent,
    CustomerAddComponent,
    CustomerViewComponent,
    CustomerEditComponent,
    CustomersComponent,
    EditSaveDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthorizationInterceptor,
      multi : true
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : ResponseInterceptor,
      multi : true
    },
    {
      provide : CustomersService,
      useClass : CustomersService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
