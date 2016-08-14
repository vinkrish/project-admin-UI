import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subjects }       from '../subjects/subjects';
import { SubjectsService }    from '../subjects/subjects.service';
import { SubjectGroupSubject }    from './subject-group-subject'
import { SubjectGroupSubjectService } from './subject-group-subject.service';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'ui-sgs-detail',
  templateUrl: 'app/subject-group-subject/subject-group-subject-edit.component.html',
  styleUrls: ['app/subject-group-subject/subject-group-subject-edit.component.css']
})

export class SubjectGroupSubjectEditComponent implements OnInit, OnDestroy {
  subjects: Subjects[];
  @Input() subjectGroupSubject: SubjectGroupSubject;
  @Output() close = new EventEmitter();
  error: any;
  sub: any;
  navigated = false;
  subjectGroupId: number = +this._cookieService.get("subjectGroupId");
  subjectGroupName: string = this._cookieService.get("subjectGroupName");

  constructor(
    private route: ActivatedRoute,
    private _cookieService: CookieService,
    private sgsService: SubjectGroupSubjectService,
    private subjectsService: SubjectsService) {
  }

  ngOnInit() {
    this.getSubjects();
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] === undefined) {
        this.navigated = false;
        this.subjectGroupSubject = new SubjectGroupSubject();
        this.subjectGroupSubject.subjectGroupId = this.subjectGroupId;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getSubjects() {
    this.subjectsService
      .getSubjects()
      .then(subjects => this.subjects = subjects)
      .catch(error => this.error = error);
    }
    subjectSelected(subjectId) {
    for (var i = 0; i < this.subjects.length; i++) {
      if (this.subjects[i].id == subjectId) {
        this.subjectGroupSubject.subjectName = this.subjects[i].subjectName;
      }
    }
  }

  save() {
    this.sgsService
      .save(this.subjectGroupSubject)
      .then(hero => {
        this.subjectGroupSubject = hero; // saved hero, w/ id if new
        this.goBack(hero);
      })
      .catch(error => this.error = error); // TODO: Display error message
  }

  goBack(savedSection: SubjectGroupSubject = null) {
    this.close.emit(savedSection);
    if (this.navigated) { window.history.back(); }
  }
