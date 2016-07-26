import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Teacher }			 from './teacher';
import { TeacherService }		 from './teacher.service';
import { TeacherEditComponent } from './teacher-edit.component';
@Component({
  selector: 'ui-teacher',
  templateUrl: 'app/teacher/teacher.component.html',
  styleUrls:  ['app/teacher/teacher.component.css'],
  directives: [TeacherEditComponent]
})

export class TeacherComponent implements OnInit {
	teachers: Teacher[];
	selectedTeacher: Teacher;
	addingTeacher = false;
	error: any;

	constructor(
		private router: Router,
		private classService: TeacherService) { }

	getTeachers() {
    this.classService
        .getTeachers()
        .then(teachers => this.teachers = teachers)
        .catch(error => this.error = error);
  }

	ngOnInit() {
		this.getTeachers();
	}

	onSelect(teacher: Teacher) {
  	this.selectedTeacher = teacher;
  	this.addingTeacher = false;
  }

	close(savedTeacher: Teacher) {
		console.log("teacher component close function");
		this.addingTeacher = false;
  		if (savedTeacher) { this.getTeachers(); }
	}

	goToDashboard() {
		this.router.navigate(['/dashboard']);
	}

	addTeacher() {
		this.addingTeacher = true;
		this.selectedTeacher = null;
	}

	gotoEdit(teacher: Teacher, event: any) {
		event.stopPropagation();
		this.router.navigate(['teacher/edit', teacher.id]);
	}

	deleteTeacher(clas: Teacher, event: any) {
    event.stopPropagation();
    this.classService
        .delete(clas)
        .then(res => {
          this.teachers = this.teachers.filter(h => h !== clas);
          if (this.selectedTeacher === clas) { this.selectedTeacher = null; }
        })
        .catch(error => this.error = error);
  }

}