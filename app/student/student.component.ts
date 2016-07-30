import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { Clas }                 from '../class/clas';
import { Section }			    from '../section/section';
import { Student }				from './student'
import { ClassService }         from '../class/class.service';
import { SectionService }		from '../section/section.service';
import { StudentService }       from './student.service';
import { StudentEditComponent } from './student-edit.component';
import { CookieService }		from 'angular2-cookie/core';

@Component({
  selector: 'ui-student',
  templateUrl: 'app/student/student.component.html',
  styleUrls:  ['app/student/student.component.css'],
  directives: [StudentEditComponent]
})

export class StudentComponent implements OnInit {
  	classes: Clas[];
  	selectedClass: Clas;
	sections: Section[];
	selectedSection: Section;
	addingSection = false;
	students: Student[];
	selectedStudent: Student;
	addingStudent = false;
	error: any;

	constructor(
		private router: Router,
    	private _cookieService:CookieService,
    	private classService: ClassService,
		private sectionService: SectionService,
		private studentService: StudentService) { }

  getClasses() {
    this.classService
        .getClasses()
        .then(classes => this.classes = classes)
        .catch(error => this.error = error);
    }

   classSelected(classId){
      for (var i = 0; i < this.classes.length; i++){
        if (this.classes[i].id == classId) {
          this.selectedClass = this.classes[i];
        }
      }
     this.getSections(this.selectedClass.id);
     this._cookieService.put("classId", ""+this.selectedClass.id);
     this._cookieService.put("className", this.selectedClass.className);
     this.addingStudent = false;
     this.addingSection = false;
     this.students = null;
   }

	getSections(id: number) {
    this.sectionService
        .getSections(id)
        .then(sections => this.sections = sections)
        .catch(error => this.error = error);
  	}

  	sectionSelected(sectionId) {
  		for (var i = 0; i < this.sections.length; i++){
	        if (this.sections[i].id == sectionId) {
	          this.selectedSection = this.sections[i];
	        }
      	}
		 this.getStudents(this.selectedSection.id);
		 this._cookieService.put("sectionId", ""+this.selectedSection.id);
		 this._cookieService.put("sectionName", this.selectedSection.sectionName);
		 this.addingStudent = false;
		 this.addingSection = true;
  	}

  	getStudents(id: number) {
  	this.studentService
        .getStudents(id)
        .then(students => this.students = students)
        .catch(error => this.error = error);
  	}


	ngOnInit() {
		this.getClasses();
    	this.selectedClass = new Clas(0, "");
    	this.selectedSection = new Section(0, "");
	}

	onSelect(student: Student) {
    	this.selectedStudent = student;
    	this.addingStudent = false;
  	}

  	close(savedStudent: Student) {
  		this.addingStudent = false;
    	if (savedStudent) { this.getStudents(this.selectedStudent.id); }
  	}

	goToDashboard() {
		this.router.navigate(['/dashboard']);
	}

	addStudent() {
		if (this.addingSection) {
			if(this.addingStudent) {
	      		this.addingStudent = false;
		    } else {
		      this.addingStudent = true;
		    }
		}
		//this.addingSection = true;
		this.selectedStudent = null;
	}

	gotoEdit(student: Student, event: any) {
		event.stopPropagation();
		this.router.navigate(['student/edit', student.id]);
	}

	deleteStudent(student: Student, event: any) {
    event.stopPropagation();
    this.studentService
        .delete(student)
        .then(res => {
          this.students = this.students.filter(h => h !== student);
          if (this.selectedStudent === student) { this.selectedStudent = null; }
        })
        .catch(error => this.error = error);
  	}

}