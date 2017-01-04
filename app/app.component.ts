import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <ui-header></ui-header>
  <div class = "container">
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['app/app.component.css']
})

export class AppComponent { }