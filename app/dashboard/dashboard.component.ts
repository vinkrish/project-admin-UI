import { Component } 		from '@angular/core';
import { Router }    		from '@angular/router'
import { CookieService }	from 'angular2-cookie/core';
import { Dashboard } 		from  './dashboard'

@Component({
	selector: 'ui-dashboard',
	templateUrl: 'app/dashboard/dashboard.component.html',
	styleUrls: ['app/dashboard/dashboard.component.css']
})

export class DashboardComponent {

	Items1: Dashboard[] = [
		{ name: 'Class', link: 'class' },
		{ name: 'Section', link: 'section' }
	];
	Items2: Dashboard[] = [
		{ name: 'Attendance', link: 'attendance' },
		{ name: 'Homework', link: 'homework' },
		{ name: 'Timetable', link: 'timetable' }
	];
	Items3: Dashboard[] = [
		{ name: 'Subject', link: 'subjects' },
		{ name: 'Subject Group', link: 'subject-group' },
		{ name: 'Subject Group Subject', link: 'subject-group-subject' },
		{ name: 'Subject Teacher', link: 'subject-teacher' },
		{ name: 'Class Subject Group', link: 'class-subject-group' }
	];
	Items4: Dashboard[] = [
		{ name: 'Student', link: 'student' },
		{ name: 'Teacher', link: 'teacher' }
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