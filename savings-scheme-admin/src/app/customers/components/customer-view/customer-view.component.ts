import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ssa-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

	title : string;
	customer : any; 
  constructor( private _activatedRoute : ActivatedRoute ) { }

  ngOnInit() {
  	this._activatedRoute.data.subscribe((d)=>{
  		this.title = d.title;
  		this.customer = d.customer;
  	});
  }

}
