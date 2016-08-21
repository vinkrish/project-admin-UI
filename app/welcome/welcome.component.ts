import { Component } 			from '@angular/core';
import { Router }    			from '@angular/router';
import { ROUTER_DIRECTIVES }	from '@angular/router';
import { CookieService }		from 'angular2-cookie/core';
import { HeaderComponent }			from '../shared/header/header.component';
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
import { ExamService }        		from '../content/exam/exam.service';

@Component({
	selector: 'ui-welcome',
	template: `
	<ui-header></ui-header>
	<div class = "container">
		<router-outlet></router-outlet>
	</div>
	`,
	directives: [ROUTER_DIRECTIVES, HeaderComponent],
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
	    TimetableService,
	    ExamService
  	]
})

export class WelcomeComponent {

}