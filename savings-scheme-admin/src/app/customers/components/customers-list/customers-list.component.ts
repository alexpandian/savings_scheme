import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Table } from '../../../common/services/table/table';
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
  customers : any;

  customersTemp : any;

  requestData : Table =  new Table(0, 2, 'customer_name');

  constructor( private route : ActivatedRoute, private _customerService : CustomersService ) { }

  ngOnInit() {
  	this.route.data.subscribe((d)=>{
  		this.title = d.title;
  	});
    this.customers = this._customerService.getCustomers();
    this.getCustomers();
  }

  getCustomers(){
    let requestData = this.requestData.getAllRequestData();
    this.customersTemp = this._customerService.getLimitedCustomers(requestData).subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

}
