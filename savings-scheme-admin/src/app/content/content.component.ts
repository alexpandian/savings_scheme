import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ssa-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor( private route : ActivatedRoute ) { }

  ngOnInit() {
  	this.route.data.subscribe((data)=>{
  		console.log(data);
  	});
  	console.log(this.route);
  }

}
