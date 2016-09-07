import { Component } 		from '@angular/core';
import { Router }    		from '@angular/router'
import { CookieService }	from 'angular2-cookie/core';
import { DashboardItem } 	from  '../shared/component/dashboard-item';

@Component({
	moduleId: module.id,
	selector: 'ui-exam-dashboard',
	templateUrl: 'exam-dashboard.component.html',
	styleUrls: ['exam-dashboard.component.css']
})

export class ExamDashboardComponent {

	Items1: DashboardItem[] = [
		{ name: 'Exam', link: 'exam' },
		{ name: 'Exam Subject Group', link: 'exam-subject-group' },
		{ name: 'Exam Subject', link: 'exam-subject' }
	];

	Items2: DashboardItem[] = [
		{ name: 'Activity', link: 'activity' },
		{ name: 'Sub-Activity', link: 'subactivity' }
	];

	constructor(private router: Router) {
	}

	gotoDetail(item: string) {
		console.log(item);
		let link = ['/', item];
		this.router.navigate(link);
	}
}