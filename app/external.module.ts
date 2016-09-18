import { AppComponent }   			from './app.component';
import { HeaderComponent }			from '../app/shared/header/header.component';
import { LoginComponent }			from './login/credentials.component';
import { DashboardComponent }       from './dashboard/dashboard.component';
import { ExamDashboardComponent }   from './exam-dashboard/exam-dashboard.component';
import { AttendanceComponent }		from '../app/content/attendance/attendance.component';
import { ClassComponent }			from '../app/content/class/class.component';
import { ClassEditComponent }		from '../app/content/class/class-edit.component';
import { ClassSubjectGroupComponent }		from '../app/content/class-subject-group/class-subject-group.component';
import { ClassSubjectGroupEditComponent } 	from '../app/content/class-subject-group/class-subject-group-edit.component';
import { ExamComponent }        		from '../app/content/exam/exam.component';
import { ExamEditComponent }        	from '../app/content/exam/exam-edit.component';
import { ExamSubjectComponent }       	from '../app/content/exam-subject/exam-subject.component';
import { ExamSubjectGroupComponent }  	from '../app/content/exam-subject-group/exam-subject-group.component';
import { ActivityComponent }          	from '../app/content/activity/activity.component';
import { SubActivityComponent }         from '../app/content/subactivity/subactivity.component';
import { HomeworkComponent }          	from '../app/content/homework/homework.component';
import { SectionComponent }           	from '../app/content/section/section.component';
import { SectionEditComponent }         from '../app/content/section/section-edit.component';
import { StudentComponent }        		from '../app/content/student/student.component';
import { StudentEditComponent }        	from '../app/content/student/student-edit.component';
import { SubjectGroupComponent }      	from '../app/content/subject-group/subject-group.component';
import { SubjectGroupEditComponent }    from '../app/content/subject-group/subject-group-edit.component';
import { SubjectGroupSubjectComponent}	from '../app/content/subject-group-subject/subject-group-subject.component';
import { SubjectGroupSubjectEditComponent}	from '../app/content/subject-group-subject/subject-group-subject-edit.component';
import { SubjectTeacherComponent }    	from '../app/content/subject-teacher/subject-teacher.component';
import { SubjectTeacherEditComponent }  from '../app/content/subject-teacher/subject-teacher-edit.component';
import { SubjectStudentComponent }    	from '../app/content/subject-student/subject-student.component';
import { SubjectsComponent }        	from '../app/content/subjects/subjects.component';
import { SubjectsEditComponent }        from '../app/content/subjects/subjects-edit.component';
import { TeacherComponent }        		from '../app/content/teacher/teacher.component';
import { TeacherEditComponent }        	from '../app/content/teacher/teacher-edit.component';
import { TimetableComponent }        	from '../app/content/timetable/timetable.component';
import { MarkComponent }        		from '../app/content/mark/mark.component';

import { CookieService }          	from 'angular2-cookie/core';
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
import { ActivityService }     		from '../app/content/activity/activity.service';
import { SubActivityService }     	from '../app/content/subactivity/subactivity.service';
import { SubjectStudentService } 	from '../app/content/subject-student/subject-student.service';
import { MarkService }				from '../app/content/mark/mark.service';
import { ActivityScoreService }		from '../app/content/activity-score/activity-score.service';
import { SubActivityScoreService }	from '../app/content/subactivity-score/subactivity-score.service';

export const myComponents = [
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
	ActivityComponent,
	SubActivityComponent,
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
	SubjectStudentComponent,
	SubjectsComponent,
	SubjectsEditComponent,
	TeacherComponent,
	TeacherEditComponent,
	TimetableComponent,
	MarkComponent
];

export const myServices = [
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
    ExamSubjectService,
    ActivityService,
    SubActivityService,
    SubjectStudentService,
    MarkService,
    ActivityScoreService,
    SubActivityScoreService
]