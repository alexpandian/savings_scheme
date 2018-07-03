import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomerValidatorService } from '../../services/validator/customer-validator.service';
import { AddressService } from '../../../common/services/address/address.service';

@Component({
  selector: 'ssa-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css'],
  providers :[
      {
        provide : CustomerValidatorService,
        useClass : CustomerValidatorService
      },
      {
        provide : AddressService,
        useClass : AddressService
      }
  ]
})
export class CustomerAddComponent implements OnInit {

	title : string; 
	customerFrom : FormGroup;
  countries : Array<any>;

  constructor( 
  	private route : ActivatedRoute,
  	private fb : FormBuilder,
    private _customerValidatorService : CustomerValidatorService,
    private _addressService : AddressService
  ) { }

  ngOnInit() {
  	this.route.data.subscribe((d)=>{
  		this.title = d.title;
  	});
    this._addressService.getCountries().subscribe( (response)=> {
      this.countries = response;
    });
  	this.createForm();
    this.countryListerner();
  }

  countryListerner():void{
    let countrySelected = this.customerFrom.get('address').get('country');
    countrySelected.valueChanges.subscribe((val)=>{
      console.log(val);
    });
  }

  createForm():void{
  	this.customerFrom = this.fb.group({
  		name : [
                '', 
                [
                  Validators.required, 
                  Validators.minLength(4), 
                  Validators.pattern("^[A-Za-z\\s]+$")
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
