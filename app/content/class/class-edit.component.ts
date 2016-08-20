import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clas }           from './clas';
import { AttendanceType } from '../../shared/attendance-type';
import { ClassService }   from './class.service';

@Component({
  moduleId: module.id,
  selector: 'ui-class-detail',
  templateUrl: 'class-edit.component.html',
  styleUrls: ['class-edit.component.css']
})

export class ClassEditComponent implements OnInit, OnDestroy {
  @Input() clas: Clas;
  @Output() close = new EventEmitter();
  attendanceTypes = [
    new AttendanceType("Daily"),
    new AttendanceType("Session"),
    new AttendanceType("Period")
  ];
  error: any;
  sub: any;
  navigated = false; // true if navigated here

  constructor(
    private classService: ClassService,
    private route: ActivatedRoute) {
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
        this.clas = clas;
        this.goBack(clas);
      })
      .catch(error => this.error = error);
  }

  goBack(savedClas: Clas = null) {
    this.close.emit(savedClas);
    if (this.navigated) { window.history.back(); }
  }

}