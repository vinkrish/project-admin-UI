import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gender }            from '../shared/gender';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'ui-student-detail',
  templateUrl: 'app/student/student-edit.component.html',
  styleUrls: ['app/student/student-edit.component.css']
})
export class HomeworkEditComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private _cookieService:CookieService) {
  }
  ngOnInit() {
  }
  ngOnDestroy() {
  }
}