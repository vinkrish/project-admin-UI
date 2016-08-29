import { Component, OnInit } 	from '@angular/core';
import { Router }            	from '@angular/router';
import { Clas }               from '../class/clas';
import { ClassService }       from '../class/class.service';
import { Exam }			 		      from '../exam/exam';
import { ExamService }		 	  from '../exam/exam.service';
import { ClassSubjectGroup }        from '../class-subject-group/class-subject-group';
import { ClassSubjectGroupService } from '../class-subject-group/class-subject-group.service';
import { ExamSubjectGroup }         from '../exam-subject-group/exam-subject-group';
import { ExamSubjectGroupService }  from '../exam-subject-group/exam-subject-group.service';
import { SubjectGroupSubject }      from '../subject-group-subject/subject-group-subject'
import { SubjectGroupSubjectService }  from '../subject-group-subject/subject-group-subject.service';
import { ExamSubject }         from './exam-subject';
import { ExamSubjectService }  from './exam-subject.service';

@Component({
	moduleId: module.id,
	selector: 'ui-exam-subject',
	templateUrl: 'exam-subject.component.html',
	styleUrls: ['exam-subject.component.css']
})

export class ExamSubjectComponent implements OnInit {
  classes: Clas[];
  selectedClass: Clas;
  exams: Exam[];
  selectedExam: Exam;
  classSubjectGroups: ClassSubjectGroup[];
  examSubjectGroup: ExamSubjectGroup;
  examSubjectGroups: ExamSubjectGroup[];
  selectedEsg: ExamSubjectGroup;
  subjectGroupSubjects: SubjectGroupSubject[];
  examSubject: ExamSubject;
  examSubjects: ExamSubject[];
  selectedExamSubject: ExamSubject;
  addingExamSubject = false;
  error: any;

  constructor(
    private router: Router,
    private classService: ClassService,
    private examService: ExamService,
    private csgService: ClassSubjectGroupService,
    private esgService: ExamSubjectGroupService,
    private sgsService: SubjectGroupSubjectService,
    private examSubjectService: ExamSubjectService) { 
  }

  getClasses() {
    this.classService
      .getClasses()
      .then(classes => this.classes = classes)
      .catch(error => this.error = error);
    }

  classSelected(classId) {
    this.examSubjects = null;
    for (var i = 0; i < this.classes.length; i++) {
      if (this.classes[i].id == classId) {
        this.selectedClass = this.classes[i];
      }
    }
    this.classSubjectGroups = null;
    this.getClassSubjectGroups(this.selectedClass.id);
    this.examSubjectGroups = null;
    this.getExams(this.selectedClass.id);
    this.addingExamSubject = false;
  }

  getExams(id: number) {
    this.examService
      .getExams(id)
      .then(exams => this.exams = exams)
      .catch(error => this.error = error);
  }

  examSelected(examId){
    this.examSubjects = null;
    for (var i = 0; i < this.exams.length; i++) {
      if (this.exams[i].id == examId) {
        this.selectedExam = this.exams[i];
      }
    }
    this.examSubjectGroups = null;
    this.getExamSubjectGroup(this.selectedExam.id);
    this.getExamSubjects(this.selectedExam.id);
    this.addingExamSubject = false;
  }

  getExamSubjectGroup(id: number){
    this.esgService
      .getExamSubjectGroups(id)
      .then(esgs => this.examSubjectGroups = esgs)
      .catch(error => this.error = error);
  }

  esgSelected(esgId){
    for (var i = 0; i < this.examSubjectGroups.length; i++) {
      if (this.examSubjectGroups[i].subjectGroupId == esgId) {
        this.selectedEsg = this.examSubjectGroups[i];
      }
    }
    this.getSubjectGroupSubjects(this.selectedEsg.subjectGroupId);
    this.addingExamSubject = false;
  }

  getSubjectGroupSubjects(id: number) {
      this.sgsService
          .getSubjectGroupSubjects(id)
          .then(subjectGroupSubjects => this.subjectGroupSubjects = subjectGroupSubjects)
          .catch(error => this.error = error);
    }

  getExamSubjects(id: number){
    this.examSubjectService
      .getExamSubjects(id)
      .then(examSubjects => this.examSubjects = examSubjects)
      .catch(error => this.error = error)
  }

  ngOnInit() {
    this.getClasses();
    this.selectedClass = new Clas();
    this.selectedExam = new Exam();
    this.selectedEsg = new ExamSubjectGroup();
  }

  onSelect(examSubject: ExamSubject) {
    this.selectedExamSubject = examSubject;
    this.addingExamSubject = false;
  }

  close(savedEsg: ExamSubjectGroup) {
    this.addingExamSubject = false;
    if (savedEsg) { this.getExams(this.selectedEsg.id); }
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  add() {
    if (this.addingExamSubject) {
      this.addingExamSubject = false;
    } else {
      this.examSubject = new ExamSubject();
      this.examSubject.examId = this.selectedExam.id;
      this.addingExamSubject = true;
    }
    this.selectedExamSubject = null;
  }

  delete(examSubject: ExamSubject, event: any) {
    event.stopPropagation();
    this.examSubjectService
      .delete(examSubject)
      .then(res => {
        this.examSubjects = this.examSubjects.filter(h => h !== examSubject);
        if (this.selectedExamSubject === examSubject) { this.selectedEsg = null; }
      })
      .catch(error => this.error = error);
  }

  getClassSubjectGroups(id: number) {
    this.csgService
      .getClassSubjectGroups(id)
      .then(classSubjectGroups => this.classSubjectGroups = classSubjectGroups)
      .catch(error => this.error = error);
  }

  subjectSelected(subjectId) {
      for (var i = 0; i < this.subjectGroupSubjects.length; i++) {
        if (this.subjectGroupSubjects[i].subjectId == subjectId) {
          this.examSubject.subjectName = this.subjectGroupSubjects[i].subjectName;
        }
      }
    }

  save() {
    this.examSubjectService
      .post(this.examSubject)
      .then(examSubject => {
        this.addingExamSubject = false;
        this.examSubjectGroup = null;
        this.examSubjectGroups = null;
        this.selectedExam = new Exam();
        this.selectedEsg = new ExamSubjectGroup();
        this.examSubjects = null;
        //this.selectedExamSubject = new ExamSubject();
        //this.getExamSubjects(this.selectedExam.id);
      })
      .catch(error => this.error = error);
  }

  update(examSubject: ExamSubject, event: any){
    event.stopPropagation();
    this.examSubjectService
      .save(examSubject)
      .then(() => this.getExamSubjects(this.selectedExam.id))
      .catch(error => this.error = error);
  }

}