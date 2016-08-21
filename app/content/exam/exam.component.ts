import { Component, OnInit } 	from '@angular/core';
import { Router }            	from '@angular/router';
import { Clas }               from '../class/clas';
import { ClassService }       from '../class/class.service';
import { Exam }			 		      from './exam';
import { ExamService }		 	  from './exam.service';
import { ExamEditComponent } 	from './exam-edit.component';
import { CookieService }      from 'angular2-cookie/core';

@Component({
	moduleId: module.id,
	selector: 'ui-exam',
	templateUrl: 'exam.component.html',
	styleUrls: ['exam.component.css'],
	directives: [ExamEditComponent]
})

export class ExamComponent implements OnInit {
  classes: Clas[];
  selectedClass: Clas;
  exams: Exam[];
  selectedExam: Exam;
  addingExam = false;
  error: any;

  constructor(
    private router: Router,
    private _cookieService: CookieService,
    private classService: ClassService,
    private examService: ExamService) { }

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
    this.getExams(this.selectedClass.id);
    this._cookieService.put("classId", "" + this.selectedClass.id);
    this._cookieService.put("className", this.selectedClass.className);
    this.addingExam = false;
  }

  getExams(id: number) {
    this.examService
      .getExams(id)
      .then(exams => this.exams = exams)
      .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getClasses();
    this.selectedClass = new Clas();
  }

  onSelect(exam: Exam) {
    this.selectedExam = exam;
    this.addingExam = false;
  }

  close(savedExam: Exam) {
    this.addingExam = false;
    if (savedExam) { this.getExams(this.selectedExam.id); }
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  gotoEdit(exam: Exam, event: any) {
		event.stopPropagation();
		this.router.navigate(['exam/edit', exam.id]);
	}

  addExam() {
    if (this.addingExam) {
      this.addingExam = false;
    } else {
      this.addingExam = true;
    }
    this.selectedExam = null;
  }

  deleteExam(exam: Exam, event: any) {
    event.stopPropagation();
    this.examService
      .delete(exam)
      .then(res => {
        this.exams = this.exams.filter(h => h !== exam);
        if (this.selectedExam === exam) { this.selectedExam = null; }
      })
      .catch(error => this.error = error);
  }

}