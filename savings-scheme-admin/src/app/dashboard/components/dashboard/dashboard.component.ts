import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ssa-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public title : string;
  
  constructor( private route : ActivatedRoute ) { }

  ngOnInit() {
  	this.route.data.subscribe((d)=>{
  		this.title = d.title;
  	});
  }

}
