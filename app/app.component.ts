import { Component } 				from '@angular/core';
import { ROUTER_DIRECTIVES }  		from '@angular/router';
import {CookieService}             from 'angular2-cookie/core';
import { AttendanceService }        from './attendance/attendance.service';
import { ClassService }        		from './class/class.service';
import { ClassSubjectGroupService } from './class-subject-group/class-subject-group.service';
import { HomeworkService }          from './homework/homework.service';
import { SectionService }        	from './section/section.service';
import { StudentService }        	from './student/student.service';
import { SubjectGroupService }      from './subject-group/subject-group.service';
import { SubjectGroupSubjectService}from './subject-group-subject/subject-group-subject.service';
import { SubjectTeacherService }    from './subject-teacher/subject-teacher.service';
import { SubjectService }        	from './subjects/subjects.service';
import { TeacherService }        	from './teacher/teacher.service';
import { TimetableService }        	from './timetable/timetable.service';

@Component({
  selector: 'my-app',
  template: `
	  <h1>Unnamed Project</h1>
	  <nav>
	      <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
	    </nav>
	    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
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
    SubjectService,
    TeacherService,
    TimetableService,
    CookieService
  ]
})
export class AppComponent { }