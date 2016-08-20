import { Component, OnInit } 	from '@angular/core';
import { Router }            	from '@angular/router';
import { Clas }			 		from './clas';
import { ClassService }		 	from './class.service';
import { ClassEditComponent } 	from './class-edit.component';

@Component({
	moduleId: module.id,
	selector: 'ui-class',
	templateUrl: 'class.component.html',
	styleUrls: ['class.component.css'],
	directives: [ClassEditComponent]
})

export class ClassComponent implements OnInit {
	classes: Clas[];
	selectedClass: Clas;
	addingClass = false;
	error: any;

	constructor(
		private router: Router,
		private classService: ClassService) { }

	getClasses() {
		this.classService
			.getClasses()
			.then(classes => this.classes = classes)
			.catch(error => this.error = error);
	}

	ngOnInit() {
		this.getClasses();
	}

	onSelect(clas: Clas) {
		this.selectedClass = clas;
		this.addingClass = false;
	}

	close(savedClass: Clas) {
		this.addingClass = false;
		if (savedClass) { this.getClasses(); }
	}

	goToDashboard() {
		this.router.navigate(['/dashboard']);
	}

	addClass() {
		this.addingClass = true;
		this.selectedClass = null;
	}

	gotoEdit(clas: Clas, event: any) {
		event.stopPropagation();
		this.router.navigate(['class/edit', clas.id]);
	}

	deleteClass(clas: Clas, event: any) {
		event.stopPropagation();
		this.classService
			.delete(clas)
			.then(res => {
				this.classes = this.classes.filter(h => h !== clas);
				if (this.selectedClass === clas) { this.selectedClass = null; }
			})
			.catch(error => this.error = error);
	}

}