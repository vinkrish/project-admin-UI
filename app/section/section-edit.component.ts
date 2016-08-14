import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { Teacher }         from '../teacher/teacher';
import { TeacherService }  from '../teacher/teacher.service';
import { Section }         from './section';
import { SectionService }  from './section.service';
import { CookieService }   from 'angular2-cookie/core';

@Component({
  selector: 'ui-section-detail',
  templateUrl: 'app/section/section-edit.component.html',
  styleUrls: ['app/section/section-edit.component.css']
})

export class SectionEditComponent implements OnInit, OnDestroy {
  teachers: Teacher[];
  @Input() section: Section;
  @Output() close = new EventEmitter();
  error: any;
  sub: any;
  navigated = false;
  className: string = this._cookieService.get("className");
  classId: number = +this._cookieService.get("classId");

  constructor(
    private route: ActivatedRoute,
    private _cookieService:CookieService,
    private sectionService: SectionService,
    private teacherService: TeacherService) {
  }

  ngOnInit() {
    this.getTeachers();
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        //var ids: string[] = params['id'].split(",");
        //let id = +ids[0];
        //let id2 = +ids[1];
        
        let sectionId = +params['id'];
        this.navigated = true;
        this.sectionService.getSection(this.classId, sectionId)
            .then(section => {
              this.section = section;
              this.section.classId = this.classId;
            });
      } else {
        this.navigated = false;
        this.section = new Section();
        this.section.classId = this.classId;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getTeachers() {
    this.teacherService
        .getTeachers()
        .then(teachers => this.teachers = teachers)
        .catch(error => this.error = error);
  }

  save() {
    this.sectionService
        .save(this.section)
        .then(hero => {
          this.section = hero; // saved hero, w/ id if new
          this.goBack(hero);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }

  goBack(savedSection: Section = null) {
    this.close.emit(savedSection);
    if (this.navigated) { window.history.back(); }
  }

}