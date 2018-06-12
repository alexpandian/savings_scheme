import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthorizationInterceptor } from './interceptors/authorization.interceptor';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';

import { RoutingModule } from './routing/routing.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
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
