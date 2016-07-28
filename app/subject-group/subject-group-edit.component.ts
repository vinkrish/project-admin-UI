import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CookieService} from 'angular2-cookie/core';
import { SubjectGroup }           from './subject-group';
import { SubjectGroupService }   from './subject-group.service';
@Component({
  selector: 'ui-subject-group-detail',
  templateUrl: 'app/subject-group/subject-group-edit.component.html',
  styleUrls: ['app/subject-group/subject-group-edit.component.css']
})
export class SubjectGroupEditComponent implements OnInit, OnDestroy {
  @Input() subjectGroup: SubjectGroup;
  @Output() close = new EventEmitter();
  error: any;
  sub: any;
  navigated = false; // true if navigated here
  constructor(
    private subjectGroupService: SubjectGroupService,
    private route: ActivatedRoute,
    private _cookieService:CookieService) {
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.subjectGroupService.getSubjectGroup(id)
            .then(subjectGroup => this.subjectGroup = subjectGroup);
      } else {
        this.navigated = false;
        this.subjectGroup = new SubjectGroup();
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  save() {
    this.subjectGroupService
        .save(this.subjectGroup)
        .then(subjectGroup => {
          this.subjectGroup = subjectGroup; // saved hero, w/ id if new
          this.goBack(subjectGroup);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }
  goBack(savedSubjectGroup: SubjectGroup = null) {
    this.close.emit(savedSubjectGroup);
    if (this.navigated) { window.history.back(); }
  }
}