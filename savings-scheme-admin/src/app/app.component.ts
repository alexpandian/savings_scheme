import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient){
  	const token : string = localStorage.getItem('token');
  	if(!token){
  		this.http.get('http://localhost/savings_scheme/admin/dummy-token').subscribe(
	  		(res:any)=>{
	  			localStorage.setItem('token', res.token);
			}
	  	);
  	}
  }
}
