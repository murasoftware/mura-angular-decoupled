import {Component} from '@angular/core';

declare var Mura: any;

@Component({
  selector: 'app-root',
  template: `
  <h1>Mura with Angular Decoupled Example</h1>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

}
