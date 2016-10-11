import { Component } 		from '@angular/core';
import { Router }    		from '@angular/router'
import { CookieService }	from 'angular2-cookie/core';
import { DashboardItem } 	from  '../shared/component/dashboard-item';

@Component({
	moduleId: module.id,
	selector: 'ui-cce-dashboard',
	templateUrl: 'cce-dashboard.component.html',
	styleUrls: ['cce-dashboard.component.css']
})

export class CceDashboardComponent {

	Items1: DashboardItem[] = [
		{ name: 'CCE Student Profile', link: 'cce-student-profile' }
	];

	constructor(private router: Router) {
	}

	gotoDetail(item: string) {
		console.log(item);
		let link = ['/', item];
		this.router.navigate(link);
	}
}