import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CustomersService } from '../../services/customers/customers.service';
import { CustomerShortData } from '../../models/customers.model';

@Component({
  selector: 'ssa-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css'],
  providers : [ CustomersService ]
})
export class CustomersListComponent implements OnInit {

	title : string; 
  customers : CustomerShortData[];

  constructor( private route : ActivatedRoute, private _customerService : CustomersService ) { }

  ngOnInit() {
  	this.route.data.subscribe((d)=>{
  		this.title = d.title;
  	});

    this.customers = this._customerService.getCustomers();
  }

}
