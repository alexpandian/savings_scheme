import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ssa-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

	title : string; 
	customerFrom : FormGroup;

  constructor( 
  	private route : ActivatedRoute,
  	private fb : FormBuilder
  ) { }

  ngOnInit() {
  	this.route.data.subscribe((d)=>{
  		this.title = d.title;
  	});
  	this.createForm();
  }

  createForm():void{
  	this.customerFrom = this.fb.group({
  		name : ['', [Validators.required, Validators.minLength(4)]],
  		mobile : ['', Validators.required],
  		email : ['',Validators.email],
  		address : this.fb.group({
  			street_1 : ['', Validators.required],
  			street_2 : [''],
  			area     : [''],
  			district : ['', Validators.required],
  			state    : ['', Validators.required],
  			country  : ['', Validators.required],
  			pincode  : ['']
  		}),
  		credentials : this.fb.group({
  			password : ['', Validators.minLength(8)],
  			confirmPassword : ['', Validators.minLength(8)]
  		})
  	});
  }

  addCustomer(){
  	console.log(this.customerFrom.value);
  	console.log(this.customerFrom);
  }

}
