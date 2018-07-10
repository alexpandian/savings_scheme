import { Component, OnInit, KeyValueDiffers } from '@angular/core';
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
  customers : any = new Array();
  table : Table =  new Table({'customer_name' : 'asc'});
  differ : any;
  searchDiffer : any;
  loading : boolean = false;

  constructor( 
                private route : ActivatedRoute, 
                private _customerService : CustomersService,
                private _differs : KeyValueDiffers 
              ) {
    this.differ = _differs.find(this.table).create();
    this.searchDiffer = _differs.find(this.table.getSearch()).create();
  }

  ngOnInit() {
  	this.route.data.subscribe((d)=>{
  		this.title = d.title;
  	});
    this.getCustomersCount();
    this.getCustomers();
  }

  ngDoCheck(){
    let ChangesSearch = this.searchDiffer.diff(this.table.getSearch());
    if(ChangesSearch){
      this.getCustomersCount();
      this.getCustomers();
    }
    let changes = this.differ.diff(this.table);
    if( changes ){
      changes.forEachChangedItem((r)=>{
        if( r.key == '_noOfRecords' || r.key == '_sort' ){
          this.table.initPagination();
          this.getCustomers();
        }
        if( r.key == '_start'){
          this.getCustomers();
        }
      });
    }
  }

  getCustomersCount(){
    let requestData = this.table.getAllRequestData();
    this._customerService.getCustomersCount(requestData).subscribe(
        (response) => {
          this.table.setTotal(response.count);
          this.table.initPagination();
        }
      );
  }

  getCustomers(){
    this.loading = true;
    let requestData = this.table.getAllRequestData();
    this._customerService.getLimitedCustomers(requestData).subscribe(
        (response) => {
          this.loading = false;
          this.customers = response.customers;
        },
        (error) => {
          this.loading = false;
        }
      );
  }

}
