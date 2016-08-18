import { Component } 		from '@angular/core';
import { Router }    		from '@angular/router';
import { ROUTER_DIRECTIVES }        from '@angular/router';
import { CookieService }	from 'angular2-cookie/core';

@Component({
	selector: 'ui-welcome',
	template: `
	<nav class="navbar navbar-default">
	  <div class="container-fluid">
	    <div class="navbar-header">
	      <a class="navbar-brand" href="#">Instituition name goes here</a>
	    </div>
	    <ul class="nav navbar-nav">
	      <li class="active"><a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a></li>
	      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Others <span class="caret"></span></a>
	        <ul class="dropdown-menu">
	          <li><a [routerLink]="['/exam']">Exam</a></li>
	        </ul>
	      </li>
	    </ul>
	    <ul class="nav navbar-nav navbar-right">
	      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Logout</a></li>
	    </ul>
	  </div>
	</nav>
	  <router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES],
	styleUrls: ['app/welcome/welcome.component.css']
})

export class WelcomeComponent {

}