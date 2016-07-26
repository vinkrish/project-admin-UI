import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Section }			 from './section';
import { SectionService }		 from './section.service';
import { SectionEditComponent } from './section-edit.component';
@Component({
  selector: 'ui-section',
  templateUrl: 'app/section/section.component.html',
  styleUrls:  ['app/section/section.component.css'],
  directives: [SectionEditComponent]
})

export class SectionComponent implements OnInit {
	sections: Section[];
	selectedSection: Section;
	addingSection = false;
	error: any;

	constructor(
		private router: Router,
		private sectionService: SectionService) { }

	getSections() {
    this.sectionService
        .getSections()
        .then(sections => this.sections = sections)
        .catch(error => this.error = error);
  	}

	ngOnInit() {
		this.getSections();
	}

	onSelect(section: Section) {
    	this.selectedSection = section;
    	this.addingSection = false;
  	}

  	close(savedClass: Section) {
  		this.addingSection = false;
    	if (savedClass) { this.getSections(); }
  	}

	goToDashboard() {
		this.router.navigate(['/dashboard']);
	}

	addSection() {
		this.addingSection = true;
		this.selectedSection = null;
	}

	gotoEdit(section: Section, event: any) {
		event.stopPropagation();
		this.router.navigate(['section/edit', section.id]);
	}

	deleteSection(section: Section, event: any) {
    event.stopPropagation();
    this.sectionService
        .delete(section)
        .then(res => {
          this.sections = this.sections.filter(h => h !== section);
          if (this.selectedSection === section) { this.selectedSection = null; }
        })
        .catch(error => this.error = error);
  }

}