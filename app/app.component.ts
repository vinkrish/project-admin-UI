import { Component }                from '@angular/core';
import { ROUTER_DIRECTIVES }        from '@angular/router';
import { HeaderComponent }			from '../app/shared/header/header.component';
import { AttendanceService }        from '../app/content/attendance/attendance.service';
import { ClassService }             from '../app/content/class/class.service';
import { ClassSubjectGroupService } from '../app/content/class-subject-group/class-subject-group.service';
import { HomeworkService }          from '../app/content/homework/homework.service';
import { SectionService }           from '../app/content/section/section.service';
import { StudentService }        	from '../app/content/student/student.service';
import { SubjectGroupService }      from '../app/content/subject-group/subject-group.service';
import { SubjectGroupSubjectService}from '../app/content/subject-group-subject/subject-group-subject.service';
import { SubjectTeacherService }    from '../app/content/subject-teacher/subject-teacher.service';
import { SubjectsService }        	from '../app/content/subjects/subjects.service';
import { TeacherService }        	from '../app/content/teacher/teacher.service';
import { TimetableService }        	from '../app/content/timetable/timetable.service';
import { ExamService }        		from '../app/content/exam/exam.service';

@Component({
  selector: 'my-app',
  template: `
	<ui-header></ui-header>
	<div class = "container">
		<router-outlet></router-outlet>
	</div>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, HeaderComponent],
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
export class AppComponent { }