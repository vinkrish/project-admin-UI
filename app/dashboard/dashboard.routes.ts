import { provideRouter, RouterConfig }  from '@angular/router';
import { LoggedInGuard }                from '../login/logged-in.guard';
import { attendanceRoutes }             from '../attendance/attendance.routes'
import { clasRoutes }                   from '../class/clas.routes';
import { clasSubjectGroupRoutes }       from '../class-subject-group/class-subject-group.routes';
import { homeworkRoutes }               from '../homework/homework.routes';
import { sectionRoutes }                from '../section/section.routes';
import { studentRoutes }                from '../student/student.routes';
import { subjectGroupRoutes }           from '../subject-group/subject-group.routes'
import { subjectGroupSubjectRoutes }    from '../subject-group-subject/subject-group-subject.routes'
import { subjectTeacherRoutes }         from '../subject-teacher/subject-teacher.routes';
import { subjectsRoutes }               from '../subjects/subjects.routes';
import { teacherRoutes }                from '../teacher/teacher.routes';
import { timetableRoutes }              from '../timetable/timetable.routes';

export const dashboardRoutes: RouterConfig = [
  ...clasRoutes,
  ...clasSubjectGroupRoutes,
  ...homeworkRoutes,
  ...sectionRoutes,
  ...studentRoutes,
  ...subjectGroupRoutes,
  ...subjectGroupSubjectRoutes,
  ...subjectTeacherRoutes,
  ...subjectsRoutes,
  ...teacherRoutes,
  ...attendanceRoutes,
  ...timetableRoutes
];