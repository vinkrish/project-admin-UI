import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute }          from '@angular/router';
import { Teacher }                  from '../teacher/Teacher';
import { TeacherService }          from '../teacher/teacher.service';
import { SubjectTeacher }          from './subject-teacher'
import { SubjectTeacherService }    from './subject-teacher.service';
import { Gender }                  from '../shared/gender';
import { CookieService }           from 'angular2-cookie/core';

@Component({
  selector: 'ui-subject-teacher-detail',
  templateUrl: 'app/subject-teacher/subject-teacher-edit.component.html',
  styleUrls: ['app/subject-teacher/subject-teacher-edit.component.css']
})
export class SubjectTeacherEditComponent implements OnInit, OnDestroy {
  subjectTeacher: SubjectTeacher;
  teachers: Teacher[];
  @Output() close = new EventEmitter();
  error: any;
  sub: any;
  navigated = false;
  className: string = this._cookieService.get("className");
  classId: number = +this._cookieService.get("classId");
  sectionName: string = this._cookieService.get("sectionName");
  sectionId: number = +this._cookieService.get("sectionId");
  constructor(
    private route: ActivatedRoute,
    private _cookieService:CookieService,
    private teacherService: TeacherService,
    private subjectTeacherService: SubjectTeacherService) {
  }
  ngOnInit() {
    this.getTeachers();
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let subjectTeacherId = +params['id'];
        this.navigated = true;
        this.subjectTeacherService.getSubjectTeacher(this.sectionId, subjectTeacherId)
            .then(subjectTeacher => {
              this.subjectTeacher = subjectTeacher;
            });
      }
    });
  }
  getTeachers(){
    this.teacherService
        .getTeachers()
        .then(teachers => this.teachers = teachers)
        .catch(error => this.error = error);
  }
  teacherSelected (teacherId) {
      for (var i = 0; i < this.teachers.length; i++)
      {
        if (this.teachers[i].id == teacherId) {
          this.subjectTeacher.teacherName = this.teachers[i].teacherName;
        }
      }
    }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  save() {
    this.subjectTeacherService
        .put(this.subjectTeacher)
        .then(hero => {
          this.subjectTeacher = hero; // saved hero, w/ id if new
          this.goBack(hero);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }
  goBack(savedSubjectTeacher: SubjectTeacher = null) {
    this.close.emit(savedSubjectTeacher);
    if (this.navigated) { window.history.back(); }
  }
}