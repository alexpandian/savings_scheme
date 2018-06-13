import { Injectable } from '@angular/core';
import { 
			HttpRequest,
			HttpHandler,
			HttpEvent,
			HttpInterceptor
	    } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

	constructor(){}

	intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
		const token: string = localStorage.getItem('token'); 
		if(!token){
			alert('no token in localstorage');
		}
		request = request.clone({
			setHeaders : {
				Authorization : 'Bearer ' + token
			}
		});
		return next.handle(request);
	}
}
