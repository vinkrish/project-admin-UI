import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CookieService} from 'angular2-cookie/core';
import { Clas }           from './clas';
import { AttendanceType }  from './attendance-type';
import { HomeworkType }    from './homework-type';
import { ClassService }   from './class.service';
@Component({
  selector: 'ui-class-detail',
  templateUrl: 'app/class/class-edit.component.html',
  styleUrls: ['app/class/class-edit.component.css']
})
export class ClassEditComponent implements OnInit, OnDestroy {
  @Input() clas: Clas;
  @Output() close = new EventEmitter();
  attendanceTypes: AttendanceType []  = [ 
    {"id": 1 ,"type": "Daily"},
    {"id": 2 ,"type": "Session"},
    {"id": 3 ,"type": "Period"}
  ];
  homeworkTypes = [
    new HomeworkType("Daily"),
    new HomeworkType("Period")
  ];
  error: any;
  sub: any;
  navigated = false; // true if navigated here
  constructor(
    private classService: ClassService,
    private route: ActivatedRoute,
    private _cookieService:CookieService) {
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.classService.getClass(id)
            .then(clas => this.clas = clas);
      } else {
        this.navigated = false;
        this.clas = new Clas();
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  save() {
    this.classService
        .save(this.clas)
        .then(clas => {
          this.clas = clas; // saved hero, w/ id if new
          this.goBack(clas);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }
  goBack(savedClas: Clas = null) {
    this.close.emit(savedClas);
    if (this.navigated) { window.history.back(); }
  }
}