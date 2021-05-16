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
    /* body {
      background: #f0f2f5;
    } */
    /* .ant-layout {
      background: #FFF;
    } */
    `
  ]
})
export class AppComponent {
  title = 'angular-sample';
}
