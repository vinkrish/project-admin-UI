import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import {CookieService}       from 'angular2-cookie/core';
import { Teacher }           from './teacher';
import { Gender }            from '../shared/gender';
import { TeacherService }    from './teacher.service';

@Component({
  selector: 'ui-teacher-detail',
  templateUrl: 'app/teacher/teacher-edit.component.html',
  styleUrls: ['app/teacher/teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit, OnDestroy {
  @Input() teacher: Teacher;
  @Output() close = new EventEmitter();
  error: any;
  sub: any;
  navigated = false; // true if navigated here
  genders = [
    new Gender("M"),
    new Gender("F")
  ];
  constructor(
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private _cookieService:CookieService) {
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.teacherService.getTeacher(id)
            .then(teacher => this.teacher = teacher);
      } else {
        this.navigated = false;
        this.teacher = new Teacher();
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  save() {
    this.teacherService
        .save(this.teacher)
        .then(teacher => {
          this.teacher = teacher; // saved hero, w/ id if new
          this.goBack(teacher);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }
  goBack(savedTeacher: Teacher = null) {
    this.close.emit(savedTeacher);
    if (this.navigated) { window.history.back(); }
  }
}