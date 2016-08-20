import { Component } 		from '@angular/core';
import { Router }    		from '@angular/router'
import { CookieService }	from 'angular2-cookie/core';
import { DashboardItem } 	from  '../shared/dashboard-item';

@Component({
	selector: 'ui-exam-dashboard',
	templateUrl: 'app/exam-dashboard/exam-dashboard.component.html',
	styleUrls: ['app/exam-dashboard/exam-dashboard.component.css']
})

export class ExamDashboardComponent {

	Items1: DashboardItem[] = [
		{ name: 'Exam', link: 'exam' },
		{ name: 'Exam Subject Group', link: 'exam-subject-group' },
		{ name: 'Exam Subject', link: 'exam-subject' }
	];

	constructor(private router: Router, private _cookieService: CookieService) {
		this._cookieService.put("schoolId", "107");
		this._cookieService.put("auth_token", "ms3e45u5os67tgo4ubfckmt2eit9g7");
	}

	gotoDetail(item: string) {
		let link = ['/', item];
		this.router.navigate(link);
	}
}