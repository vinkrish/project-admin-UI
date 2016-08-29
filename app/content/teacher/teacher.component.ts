import { Component, OnInit } 	from '@angular/core';
import { Router }            	from '@angular/router';
import { Teacher }			 	from './teacher';
import { TeacherService }		from './teacher.service';

@Component({
	moduleId: module.id,
	selector: 'ui-teacher',
	templateUrl: 'teacher.component.html',
	styleUrls: ['teacher.component.css']
})

export class TeacherComponent implements OnInit {
	teachers: Teacher[];
	selectedTeacher: Teacher;
	addingTeacher = false;
	error: any;

	constructor(
		private router: Router,
		private teacherService: TeacherService) { }

	getTeachers() {
		this.teacherService
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
		this.teacherService
			.delete(clas)
			.then(res => {
				this.teachers = this.teachers.filter(h => h !== clas);
				if (this.selectedTeacher === clas) { this.selectedTeacher = null; }
			})
			.catch(error => this.error = error);
	}

}