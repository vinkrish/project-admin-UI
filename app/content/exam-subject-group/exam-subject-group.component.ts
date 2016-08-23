import { Component, OnInit } 	from '@angular/core';
import { Router }            	from '@angular/router';
import { Clas }               from '../class/clas';
import { ClassService }       from '../class/class.service';
import { Exam }			 		      from '../exam/exam';
import { ExamService }		 	  from '../exam/exam.service';
import { SubjectGroup }       from '../subject-group/subject-group';
import { SubjectGroupService }     from '../subject-group/subject-group.service';
import { ExamSubjectGroup }        from './exam-subject-group';
import { ExamSubjectGroupService } from './exam-subject-group.service';
import { ExamSubjectGroupEditComponent } 	from './exam-subject-group-edit.component';
import { CookieService }       from 'angular2-cookie/core';

@Component({
	moduleId: module.id,
	selector: 'ui-esg',
	templateUrl: 'exam-subject-group.component.html',
	styleUrls: ['exam-subject-group.component.css'],
	directives: []
})

export class ExamSubjectGroupComponent implements OnInit {
  classes: Clas[];
  selectedClass: Clas;
  exams: Exam[];
  selectedExam: Exam;
  subjectGroups: SubjectGroup[];
  examSubjectGroup: ExamSubjectGroup;
  examSubjectGroups: ExamSubjectGroup[];
  selectedEsg: ExamSubjectGroup;
  addingEsg = false;
  error: any;

  constructor(
    private router: Router,
    private _cookieService: CookieService,
    private classService: ClassService,
    private examService: ExamService,
    private subjectGroupService: SubjectGroupService,
    private esgService: ExamSubjectGroupService) { 
  }

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
    this.examSubjectGroups = null;
    this.getExams(this.selectedClass.id);
    this._cookieService.put("classId", "" + this.selectedClass.id);
    this._cookieService.put("className", this.selectedClass.className);
    this.addingEsg = false;
  }

  getExams(id: number) {
    this.examService
      .getExams(id)
      .then(exams => this.exams = exams)
      .catch(error => this.error = error);
  }

  examSelected(examId){
    for (var i = 0; i < this.exams.length; i++) {
      if (this.exams[i].id == examId) {
        this.selectedExam = this.exams[i];
      }
    }
    this.examSubjectGroups = null;
    this.getExamSubjectGroup(this.selectedExam.id);
    this._cookieService.put("examId", "" + this.selectedExam.id);
    this._cookieService.put("examName", this.selectedExam.examName);
    this.addingEsg = false;
  }

  getExamSubjectGroup(id: number){
    this.esgService
      .getExamSubjectGroups(id)
      .then(esgs => this.examSubjectGroups = esgs)
      .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getClasses();
    this.getSubjectGroups();
    this.selectedClass = new Clas();
    this.selectedExam = new Exam();
  }

  onSelect(esg: ExamSubjectGroup) {
    this.selectedEsg = esg;
    this.addingEsg = false;
  }

  close(savedEsg: ExamSubjectGroup) {
    this.addingEsg = false;
    if (savedEsg) { this.getExams(this.selectedEsg.id); }
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  add() {
    if (this.addingEsg) {
      this.addingEsg = false;
    } else {
      this.examSubjectGroup = new ExamSubjectGroup();
      this.examSubjectGroup.examId = this.selectedExam.id;
      this.addingEsg = true;
    }
    this.selectedEsg = null;
  }

  delete(esg: ExamSubjectGroup, event: any) {
    event.stopPropagation();
    this.esgService
      .delete(esg)
      .then(res => {
        this.examSubjectGroups = this.examSubjectGroups.filter(h => h !== esg);
        if (this.selectedEsg === esg) { this.selectedEsg = null; }
      })
      .catch(error => this.error = error);
  }

  getSubjectGroups() {
    this.subjectGroupService
      .getSubjectGroups()
      .then(subjectGroups => this.subjectGroups = subjectGroups)
      .catch(error => this.error = error);
  }

  subjectGroupSelected(subjectGroupId) {
      for (var i = 0; i < this.subjectGroups.length; i++) {
        if (this.subjectGroups[i].id == subjectGroupId) {
          this.examSubjectGroup.subjectGroupName = this.subjectGroups[i].subjectGroupName;
        }
      }
    }

  save() {
    this.esgService
      .post(this.examSubjectGroup)
      .then(examSubjectGroup => {
        this.addingEsg = false;
        this.examSubjectGroup = null;
        this.examSubjectGroups = null;
        this.selectedExam = new Exam();
      })
      .catch(error => this.error = error);
  }

}