import { Component }                from '@angular/core';
import { ROUTER_DIRECTIVES }        from '@angular/router';
import { CookieService }            from 'angular2-cookie/core';

@Component({
  selector: 'my-app',
  template: `
	  <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
   providers: [
    CookieService
  ]
})
export class AppComponent { }