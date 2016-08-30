import { NgModule }       	from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule  } 	from '@angular/platform-browser';
import { CookieService }    from 'angular2-cookie/core';
import { AppComponent }   	from './app.component';
import { HeaderComponent }	from '../app/shared/header/header.component';

import { HttpModule } 		from '@angular/http';
import { routing } 			from './app.routes';

import { LoginComponent }			from './login/credentials.component';
import { DashboardComponent }       from './dashboard/dashboard.component';
import { ExamDashboardComponent }   from './exam-dashboard/exam-dashboard.component';
import { AttendanceComponent }		from '../app/content/attendance/attendance.component';
import { ClassComponent }			from '../app/content/class/class.component';
import { ClassEditComponent }		from '../app/content/class/class-edit.component';
import { ClassSubjectGroupComponent } 		from '../app/content/class-subject-group/class-subject-group.component';
import { ClassSubjectGroupEditComponent } 	from '../app/content/class-subject-group/class-subject-group-edit.component';
import { ExamComponent }        	from '../app/content/exam/exam.component';
import { ExamEditComponent }        from '../app/content/exam/exam-edit.component';
import { ExamSubjectComponent }       from '../app/content/exam-subject/exam-subject.component';
import { ExamSubjectGroupComponent }  from '../app/content/exam-subject-group/exam-subject-group.component';
import { HomeworkComponent }          from '../app/content/homework/homework.component';
import { SectionComponent }           from '../app/content/section/section.component';
import { SectionEditComponent }           from '../app/content/section/section-edit.component';
import { StudentComponent }        	from '../app/content/student/student.component';
import { StudentEditComponent }        	from '../app/content/student/student-edit.component';
import { SubjectGroupComponent }      from '../app/content/subject-group/subject-group.component';
import { SubjectGroupEditComponent }      from '../app/content/subject-group/subject-group-edit.component';
import { SubjectGroupSubjectComponent}from '../app/content/subject-group-subject/subject-group-subject.component';
import { SubjectGroupSubjectEditComponent}from '../app/content/subject-group-subject/subject-group-subject-edit.component';
import { SubjectTeacherComponent }    from '../app/content/subject-teacher/subject-teacher.component';
import { SubjectTeacherEditComponent }    from '../app/content/subject-teacher/subject-teacher-edit.component';
import { SubjectsComponent }        	from '../app/content/subjects/subjects.component';
import { SubjectsEditComponent }        	from '../app/content/subjects/subjects-edit.component';
import { TeacherComponent }        	from '../app/content/teacher/teacher.component';
import { TeacherEditComponent }        	from '../app/content/teacher/teacher-edit.component';
import { TimetableComponent }        	from '../app/content/timetable/timetable.component';

import { LoginService }				from './login/credentials.service';
import { LoggedInGuard }			from './login/logged-in.guard';
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
import { ExamSubjectGroupService }  from '../app/content/exam-subject-group/exam-subject-group.service';
import { ExamSubjectService }       from '../app/content/exam-subject/exam-subject.service';

@NgModule({
	bootstrap:    [AppComponent],
	imports:      [BrowserModule, HttpModule, routing, FormsModule],
    declarations: [
    	AppComponent, 
    	HeaderComponent,
    	LoginComponent,
    	DashboardComponent,
    	ExamDashboardComponent,
    	AttendanceComponent,
    	ClassComponent,
    	ClassEditComponent,
    	ClassSubjectGroupComponent,
    	ClassSubjectGroupEditComponent,
    	ExamComponent,
    	ExamEditComponent,
    	ExamSubjectComponent,
    	ExamSubjectGroupComponent,
    	HomeworkComponent,
    	SectionComponent,
    	SectionEditComponent,
    	StudentComponent,
    	StudentEditComponent,
    	SubjectGroupComponent,
    	SubjectGroupEditComponent,
    	SubjectGroupSubjectComponent,
    	SubjectGroupSubjectEditComponent,
    	SubjectTeacherComponent,
    	SubjectTeacherEditComponent,
    	SubjectsComponent,
    	SubjectsEditComponent,
    	TeacherComponent,
    	TeacherEditComponent,
    	TimetableComponent
    ],
    providers: [
    	CookieService,
    	LoginService,
    	LoggedInGuard,
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
	    ExamService,
	    ExamSubjectGroupService,
	    ExamSubjectService
  ]
})

export class AppModule {}