import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomerValidatorService } from '../../services/validator/customer-validator.service';
import { AddressService } from '../../../common/services/address/address.service';
import { CustomersService } from '../../services/customers/customers.service';

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
      },
      {
        provide : CustomersService,
        useClass : CustomersService
      }
  ]
})
export class CustomerAddComponent implements OnInit {

	title : string; 
	customerFrom : FormGroup;
  countries : Array<any>;
  states : Array<any>;
  districts : Array<any>;

  constructor( 
  	private route : ActivatedRoute,
  	private fb : FormBuilder,
    private _customerValidatorService : CustomerValidatorService,
    private _addressService : AddressService,
    private _customerService : CustomersService
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
    this.stateListerner();
  }

  countryListerner():void{
    let countrySelected = this.customerFrom.get('address').get('country');
    countrySelected.valueChanges.subscribe((countryId)=>{
      this._addressService.getStates(countryId).subscribe((states)=>{
        this.customerFrom.get('address').get('state').reset();
        this.customerFrom.get('address').get('district').reset();
        this.states = states;
      });
    });
  }

  stateListerner():void{
    let stateSelected = this.customerFrom.get('address').get('state');
    stateSelected.valueChanges.subscribe((stateId)=>{
      if(stateId){
        this._addressService.getDistricts(stateId).subscribe((districts)=>{
          this.customerFrom.get('address').get('district').reset();
          this.districts = districts;
        });
      }
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
            			pincode  : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
  		}),
  		credentials : this.fb.group({
  			password : ['', [Validators.required, Validators.minLength(8)]],
  			confirmPassword : ['', [Validators.required, Validators.minLength(8)]]
  		},{ validator : this._customerValidatorService.validatePassword })
  	});
  }

  addCustomer(): void{
  	this._customerService.addCustomer(this.customerFrom.value)
      .subscribe(
          (response)=>{

          }
        );
  }
}
