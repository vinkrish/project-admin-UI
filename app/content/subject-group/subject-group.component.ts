import { Component, OnInit } 		from '@angular/core';
import { Router }            		from '@angular/router';
import { SubjectGroup }			 	from './subject-group';
import { SubjectGroupService }		from './subject-group.service';

@Component({
	moduleId: module.id,
	selector: 'ui-subject-group',
	templateUrl: 'subject-group.component.html',
	styleUrls: ['subject-group.component.css']
})

export class SubjectGroupComponent implements OnInit {
	subjectGroups: SubjectGroup[];
	selectedSubjectGroup: SubjectGroup;
	addingSubjectGroup = false;
	error: any;

	constructor(
		private router: Router,
		private subjectGroupService: SubjectGroupService) { }

	getSubjectGroups() {
		this.subjectGroupService
			.getSubjectGroups()
			.then(subjectGroups => this.subjectGroups = subjectGroups)
			.catch(error => this.error = error);
	}

	ngOnInit() {
		this.getSubjectGroups();
	}

	onSelect(subjectGroup: SubjectGroup) {
		this.selectedSubjectGroup = subjectGroup;
		this.addingSubjectGroup = false;
	}

	close(savedClass: SubjectGroup) {
		console.log("class component close function");
		this.addingSubjectGroup = false;
		if (savedClass) { this.getSubjectGroups(); }
	}

	addSubjectGroup() {
		this.addingSubjectGroup = true;
		this.selectedSubjectGroup = null;
	}

	gotoEdit(subjectGroup: SubjectGroup, event: any) {
		event.stopPropagation();
		this.router.navigate(['subject-group/edit', subjectGroup.id]);
	}

	deleteSubjectGroup(subjectGroup: SubjectGroup, event: any) {
		event.stopPropagation();
		this.subjectGroupService
			.delete(subjectGroup)
			.then(res => {
				this.subjectGroups = this.subjectGroups.filter(h => h !== subjectGroup);
				if (this.selectedSubjectGroup === subjectGroup) { this.selectedSubjectGroup = null; }
			})
			.catch(error => this.error = error);
	}

}