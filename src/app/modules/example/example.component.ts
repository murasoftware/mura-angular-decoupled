import {Inject, ChangeDetectorRef,Component,ElementRef} from '@angular/core';

import { MuraService } from '../../mura.service';
@Component({
  selector: 'example',
  template: `
  <h3 *ngIf="hasVar()">{{context.myvar}}</h3>
	<h3 *ngIf="!hasVar()">Enter example variable in configurator</h3>
  `,
  styles: []
})

export class ExampleComponent {
	context:object={myvar:""};
	Mura:any
	constructor(
		private hostElement: ElementRef,
		private changeDetectorRef: ChangeDetectorRef,
		private muraService:MuraService
	){

		this.Mura=this.muraService.getInstance();
		//This is a dynamically added component that does not support Angular life cycle events
		setTimeout(
			()=>{
				this.updateContext();
				this.detectChanges();
			}
		);
	}

	hasVar(){
		return this.context;
	}

	updateContext(){
		this.context=this.Mura(this.hostElement.nativeElement).closest('.mura-async-object').data()
	}

	detectChanges(){
		this.changeDetectorRef.detectChanges();
	}

	ngOnInit() {
		
	}

}
