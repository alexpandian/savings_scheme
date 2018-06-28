import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomerValidatorService } from '../../services/validator/customer-validator.service';

@Component({
  selector: 'ssa-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css'],
  providers :[
      {
        provide : CustomerValidatorService,
        useClass : CustomerValidatorService
      }
  ]
})
export class CustomerAddComponent implements OnInit {

	title : string; 
	customerFrom : FormGroup;

  constructor( 
  	private route : ActivatedRoute,
  	private fb : FormBuilder,
    private _customerValidatorService : CustomerValidatorService
  ) { }

  ngOnInit() {
  	this.route.data.subscribe((d)=>{
  		this.title = d.title;
  	});
  	this.createForm();
  }

  createForm():void{
  	this.customerFrom = this.fb.group({
  		name : [
                '', 
                [
                  Validators.required, 
                  Validators.minLength(4), 
                  Validators.pattern("/^[a-z ,.'-]+$/i")
                ]
             ],
  		mobile : [
                  '', 
                  [
                    Validators.required, 
                    Validators.pattern('^[0-9]+$')
                  ]
                ],
  		email : [
                  '',
                  [Validators.email],
                  [this._customerValidatorService.validateEmail()]
              ],
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
