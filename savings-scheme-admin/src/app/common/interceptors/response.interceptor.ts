import { Injectable } from '@angular/core';
import { 
			HttpRequest,
			HttpResponse,
			HttpErrorResponse,
			HttpHandler,
			HttpEvent,
			HttpInterceptor
		} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor{
	intercept( request : HttpRequest<any>, next : HttpHandler ) : Observable<HttpEvent<any>>{
		return next.handle(request).do(
			(event : HttpEvent<any>)=>{
				if(event instanceof HttpResponse){
					//console.log(event);
				}
			},
			(error : any)=>{
				if(error instanceof HttpErrorResponse){
					
					 if (error.status === 0 || error.status === 500) {
					 	alert("Unexpected error occured. Try again later.");
					 }

					 if (error.status === 401) {
					 	alert("Login again");
					 }
				}
			});
	}
}
