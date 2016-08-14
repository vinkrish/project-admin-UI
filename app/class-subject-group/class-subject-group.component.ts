import { Component, OnInit }              from '@angular/core';
import { Router }                         from '@angular/router';
import { Clas }                           from '../class/clas';
import { ClassService }                   from '../class/class.service';
import { ClassSubjectGroup }              from './class-subject-group'
import { ClassSubjectGroupService }       from './class-subject-group.service';
import { ClassSubjectGroupEditComponent } from './class-subject-group-edit.component';
import { CookieService }                  from 'angular2-cookie/core';

@Component({
  selector: 'ui-class-subject-group',
  templateUrl: 'app/class-subject-group/class-subject-group.component.html',
  styleUrls: ['app/class-subject-group/class-subject-group.component.css'],
  directives: [ClassSubjectGroupEditComponent]
})

export class ClassSubjectGroupComponent implements OnInit {
  classes: Clas[];
  selectedClass: Clas;
  clasSubjectGroups: ClassSubjectGroup[];
  selectedCSG: ClassSubjectGroup;
  addingCSG = false;
  error: any;

  constructor(
    private router: Router,
    private _cookieService: CookieService,
    private classService: ClassService,
    private csgService: ClassSubjectGroupService) { }

  getClasses() {
    this.classService
      .getClasses()
      .then(classes => this.classes = classes)
      .catch(error => this.error = error);
    }

  classSelected(classId) {
    //this.selectedClass = null;
    for (var i = 0; i < this.classes.length; i++) {
      if (this.classes[i].id == classId) {
        this.selectedClass = this.classes[i];
      }
    }
    this.getClassSubjectGroups(this.selectedClass.id);
    this._cookieService.put("classId", "" + this.selectedClass.id);
    this._cookieService.put("className", this.selectedClass.className);
    this.addingCSG = false;
  }

  getClassSubjectGroups(id: number) {
    this.csgService
      .getClassSubjectGroups(id)
      .then(clasSubjectGroups => this.clasSubjectGroups = clasSubjectGroups)
      .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getClasses();
    this.selectedClass = new Clas();
  }

  onSelect(subjectGroupSubject: ClassSubjectGroup) {
    this.selectedCSG = subjectGroupSubject;
    this.addingCSG = false;
  }

  close(savedSGS: ClassSubjectGroup) {
    this.addingCSG = false;
    if (savedSGS) { this.getClassSubjectGroups(this.selectedCSG.id); }
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  addCSG() {
    if (this.addingCSG) {
      this.addingCSG = false;
    } else {
      this.addingCSG = true;
    }
    this.selectedCSG = null;
  }

  deleteCSG(csg: ClassSubjectGroup, event: any) {
    event.stopPropagation();
    this.csgService
      .delete(csg)
      .then(res => {
        this.clasSubjectGroups = this.clasSubjectGroups.filter(h => h !== csg);
        if (this.selectedCSG === csg) { this.selectedCSG = null; }
      })
      .catch(error => this.error = error);
  }

}