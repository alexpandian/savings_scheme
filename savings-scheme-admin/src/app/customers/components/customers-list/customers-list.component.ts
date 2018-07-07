import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Table } from '../../../common/services/table/table';
import { CustomersService } from '../../services/customers/customers.service';
//import { CustomerShortData } from '../../models/customers.model';

@Component({
  selector: 'ssa-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css'],
  providers : [ CustomersService ]
})
export class CustomersListComponent implements OnInit {

	title : string; 
  customers : any;
  table : Table =  new Table(0, 2, {'customer_name' : 'asc'});

  constructor( private route : ActivatedRoute, private _customerService : CustomersService ) { }

  ngOnInit() {
  	this.route.data.subscribe((d)=>{
  		this.title = d.title;
  	});
    //this.customers = this._customerService.getCustomers();
    this.getCustomers();
  }

  ngDoCheck(){
    // if(this.table !== this.table){

    // }
    console.log(this.table.getAllRequestData());
  }

  getCustomers(){
    let requestData = this.table.getAllRequestData();
    this._customerService.getLimitedCustomers(requestData).subscribe(
        (response) => {
          this.customers = response.customers;
          this.table.setTotal(response.count);
          this.table.initPagination();
        }
      );
  }

}
