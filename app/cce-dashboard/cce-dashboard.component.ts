import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { CookieService } from 'angular2-cookie/core';
import { DashboardItem } from '../shared/component/dashboard-item';

@Component({
  moduleId: module.id,
  selector: 'ui-cce-dashboard',
  templateUrl: 'cce-dashboard.component.html',
  styleUrls: ['cce-dashboard.component.css']
})

export class CceDashboardComponent {

  constructor(private router: Router) { }

  Items1: DashboardItem[] = [
	{ name: 'CCE Student Profile', link: 'cce-student-profile' },
	{ name: 'CCE Coscholastic', link: 'cce-coscholastic' },
	{ name: 'CCE Coscholastic Class', link: 'cce-coscholastic-class' },
	{ name: 'CCE Section Heading', link: 'cce-section-heading' }
  ];

  Items2: DashboardItem[] = [
	{ name: 'CCE Topic Primary', link: 'cce-topic-primary' },
	{ name: 'CCE Aspect Primary', link: 'cce-aspect-primary' }
  ];

  gotoDetail(item: string) {
	let link = ['/', item];
	this.router.navigate(link);
  }
}