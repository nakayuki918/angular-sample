import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `, 
  styles: [
    `
    .main {
      padding: 0 50px;
    }

    `
  ]
})
export class AppComponent {
  title = 'angular-sample';
}
