import { Inject, Injectable, Optional } from '@angular/core';
import { DomService } from './dom.service';
import { ExampleComponent } from './modules/example/example.component';
import { CollectionLayoutComponent } from './modules/collectionlayout/collectionlayout.component';
//import Mura from 'mura.js';
//import { WindowRef } from './windowref';
declare var Mura: any;

@Injectable()

export class MuraService {
	private renderedContent:any;


	
	constructor(@Inject(DomService) private domService) {

		Mura.init({
				rootpath:"http://localhost:8888",
				siteid:"default",
				processMarkup:false
			});


		Mura.loader()
			.loadcss(Mura.corepath + '/modules/v1/core_assets/css/mura.10.min.css')
			.loadcss(Mura.corepath + '/modules/v1/core_assets/css/mura.10.skin.css');

		const domServiceRef=this.domService;

		Mura.UI.Angular=Mura.UI.extend(
			{
				component:'',
				renderClient:function(){
					domServiceRef.appendComponent(this.context.targetEl,this.component);
					this.trigger('afterRender');
				}
			});

		Mura.Module.Example=Mura.UI.Angular.extend({
				component:ExampleComponent
			});

		Mura.Module.NgCollectionLayout=Mura.UI.Angular.extend({
				component:CollectionLayoutComponent
			});


	}

	getInstance(){
		return Mura;
	}

}
