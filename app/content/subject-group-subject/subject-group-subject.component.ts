import { Component, OnInit }     	from '@angular/core';
import { Router }                	from '@angular/router';
import { SubjectGroup }				    from '../subject-group/subject-group';
import { SubjectGroupService }		from '../subject-group/subject-group.service';
import { SubjectGroupSubject }		from './subject-group-subject'
import { SubjectGroupSubjectService }         from './subject-group-subject.service';
import { SubjectGroupSubjectEditComponent }   from './subject-group-subject-edit.component';
import { CookieService } from 'angular2-cookie/core';

@Component({
  moduleId: module.id,
  selector: 'ui-subject-group-subject',
  templateUrl: 'subject-group-subject.component.html',
  styleUrls:  ['subject-group-subject.component.css'],
  directives: [ SubjectGroupSubjectEditComponent ]
})

export class SubjectGroupSubjectComponent implements OnInit {
  	subjectGroups: SubjectGroup[];
  	selectedSubjectGroup: SubjectGroup;
	  subjectGroupSubjects: SubjectGroupSubject[];
	  selectedSGS: SubjectGroupSubject;
	  addingSGS = false;
	  error: any;

	constructor(
		private router: Router,
    private _cookieService:CookieService,
    private subjectGroupService: SubjectGroupService,
		private subjectGroupSubjectService: SubjectGroupSubjectService) { }

  getSubjectGroups() {
    this.subjectGroupService
        .getSubjectGroups()
        .then(subjectGroups => this.subjectGroups = subjectGroups)
        .catch(error => this.error = error);
    }

   subjectGroupSelected(subjectGroupId){
     //this.selectedClass = null;
      for (var i = 0; i < this.subjectGroups.length; i++)
      {
        if (this.subjectGroups[i].id == subjectGroupId) {
          this.selectedSubjectGroup = this.subjectGroups[i];
        }
      }
     this.getSubjectGroupSubjects(this.selectedSubjectGroup.id);
     this._cookieService.put("subjectGroupId", ""+this.selectedSubjectGroup.id);
     this._cookieService.put("subjectGroupName", this.selectedSubjectGroup.subjectGroupName);
     this.addingSGS = false;
   }

	getSubjectGroupSubjects(id: number) {
	    this.subjectGroupSubjectService
	        .getSubjectGroupSubjects(id)
	        .then(subjectGroupSubjects => this.subjectGroupSubjects = subjectGroupSubjects)
	        .catch(error => this.error = error);
  	}

	ngOnInit() {
		this.getSubjectGroups();
    	this.selectedSubjectGroup = new SubjectGroup();
	}

	onSelect(subjectGroupSubject: SubjectGroupSubject) {
    	this.selectedSGS = subjectGroupSubject;
    	this.addingSGS = false;
  	}

  	close(savedSGS: SubjectGroupSubject) {
  		this.addingSGS = false;
    	if (savedSGS) { this.getSubjectGroupSubjects(this.selectedSGS.id); }
  	}

	goToDashboard() {
		this.router.navigate(['/dashboard']);
	}

	addSubjectGroupSubject() {
	    if(this.addingSGS) {
	      this.addingSGS = false;
	    } else {
	      this.addingSGS = true;
	    }
		this.selectedSGS = null;
	}

	deleteSubjectGroupSubject(sgs: SubjectGroupSubject, event: any) {
    event.stopPropagation();
    this.subjectGroupSubjectService
        .delete(sgs)
        .then(res => {
          this.subjectGroupSubjects = this.subjectGroupSubjects.filter(h => h !== sgs);
          if (this.selectedSGS === sgs) { this.selectedSGS = null; }
        })
        .catch(error => this.error = error);
  }

}