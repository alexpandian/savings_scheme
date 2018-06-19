import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CustomersService } from '../../services/customers/customers.service';

@Component({
  selector: 'ssa-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

	title : string; 
  constructor( private route : ActivatedRoute ) { }

  ngOnInit() {
  	this.route.data.subscribe((d)=>{
  		this.title = d.title;
  	});
  }

}
