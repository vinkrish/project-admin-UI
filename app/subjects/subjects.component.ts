import { Component, OnInit } 	from '@angular/core';
import { Router }            	from '@angular/router';
import { Subjects }			 	from './subjects';
import { SubjectsService }		from './subjects.service';
import { SubjectsEditComponent }from './subjects-edit.component';

@Component({
	selector: 'ui-subjects',
	templateUrl: 'app/subjects/subjects.component.html',
	styleUrls: ['app/subjects/subjects.component.css'],
	directives: [SubjectsEditComponent]
})

export class SubjectsComponent implements OnInit {
	subjects: Subjects[];
	selectedSubject: Subjects;
	addingSubject = false;
	error: any;

	constructor(
		private router: Router,
		private subjectsService: SubjectsService) { }

	getSubjects() {
		this.subjectsService
			.getSubjects()
			.then(subjects => this.subjects = subjects)
			.catch(error => this.error = error);
	}

	ngOnInit() {
		this.getSubjects();
	}

	onSelect(subject: Subjects) {
		this.selectedSubject = subject;
		this.addingSubject = false;
	}

	close(savedClass: Subjects) {
		console.log("class component close function");
		this.addingSubject = false;
		if (savedClass) { this.getSubjects(); }
	}

	goToDashboard() {
		this.router.navigate(['/dashboard']);
	}

	addSubject() {
		this.addingSubject = true;
		this.selectedSubject = null;
	}

	gotoEdit(subject: Subjects, event: any) {
		event.stopPropagation();
		this.router.navigate(['subject/edit', subject.id]);
	}

	deleteSubject(subject: Subjects, event: any) {
		event.stopPropagation();
		this.subjectsService
			.delete(subject)
			.then(res => {
				this.subjects = this.subjects.filter(h => h !== subject);
				if (this.selectedSubject === subject) { this.selectedSubject = null; }
			})
			.catch(error => this.error = error);
	}

}