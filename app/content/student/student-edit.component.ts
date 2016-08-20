import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Student }           from './student';
import { StudentService }    from './student.service';
import { Gender }            from '../../shared/gender';
import { CookieService }     from 'angular2-cookie/core';

@Component({
  moduleId: module.id,
  selector: 'ui-student-detail',
  templateUrl: 'student-edit.component.html',
  styleUrls: ['student-edit.component.css']
})

export class StudentEditComponent implements OnInit, OnDestroy {
  @Input() student: Student;
  @Output() close = new EventEmitter();
  error: any;
  sub: any;
  navigated = false;
  genders = [
    new Gender("M"),
    new Gender("F")
  ];
  className: string = this._cookieService.get("className");
  classId: number = +this._cookieService.get("classId");
  sectionName: string = this._cookieService.get("sectionName");
  sectionId: number = +this._cookieService.get("sectionId");

  constructor(
    private route: ActivatedRoute,
    private _cookieService: CookieService,
    private studentService: StudentService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let studentId = +params['id'];
        this.navigated = true;
        this.studentService.getStudent(this.sectionId, studentId)
          .then(student => {
            this.student = student;
            //this.student.classId = this.classId;
          });
      } else {
        this.navigated = false;
        this.student = new Student();
        //this.section.classId = this.classId;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save() {
    this.studentService
      .save(this.student)
      .then(hero => {
        this.student = hero; // saved hero, w/ id if new
        this.goBack(hero);
      })
      .catch(error => this.error = error); // TODO: Display error message
  }

  goBack(savedStudent: Student = null) {
    this.close.emit(savedStudent);
    if (this.navigated) { window.history.back(); }
  }

}