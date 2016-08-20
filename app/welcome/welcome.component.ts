import { Component } 			from '@angular/core';
import { Router }    			from '@angular/router';
import { ROUTER_DIRECTIVES }	from '@angular/router';
import { CookieService }		from 'angular2-cookie/core';
import { AttendanceService }        from '../content/attendance/attendance.service';
import { ClassService }             from '../content/class/class.service';
import { ClassSubjectGroupService } from '../content/class-subject-group/class-subject-group.service';
import { HomeworkService }          from '../content/homework/homework.service';
import { SectionService }           from '../content/section/section.service';
import { StudentService }        	from '../content/student/student.service';
import { SubjectGroupService }      from '../content/subject-group/subject-group.service';
import { SubjectGroupSubjectService}from '../content/subject-group-subject/subject-group-subject.service';
import { SubjectTeacherService }    from '../content/subject-teacher/subject-teacher.service';
import { SubjectsService }        	from '../content/subjects/subjects.service';
import { TeacherService }        	from '../content/teacher/teacher.service';
import { TimetableService }        	from '../content/timetable/timetable.service';

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
	styleUrls: ['app/welcome/welcome.component.css'],
	providers: [
	    AttendanceService,
	    ClassService,
	    ClassSubjectGroupService,
	    HomeworkService,
	    SectionService,
	    StudentService,
	    SubjectGroupService,
	    SubjectGroupSubjectService,
	    SubjectTeacherService,
	    SubjectsService,
	    TeacherService,
	    TimetableService
  	]
})

export class WelcomeComponent {

}