import { Directive, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ssaEditSave]'
})
export class EditSaveDirective {

	public isEdit : boolean = true;

  constructor(
  				private container : ViewContainerRef,
  				private template : TemplateRef<any>
  			) { }

  ngOnInit():void{
  	this.container.createEmbeddedView(this.template);
  }

}
