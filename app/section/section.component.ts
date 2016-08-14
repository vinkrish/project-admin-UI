import { Component, OnInit }     from '@angular/core';
import { Router }                from '@angular/router';
import { Clas }                  from '../class/clas';
import { Section }			         from './section';
import { SectionService }		     from './section.service';
import { ClassService }          from '../class/class.service';
import { SectionEditComponent }  from './section-edit.component';
import { CookieService }         from 'angular2-cookie/core';

@Component({
  selector: 'ui-section',
  templateUrl: 'app/section/section.component.html',
  styleUrls: ['app/section/section.component.css'],
  directives: [SectionEditComponent]
})

export class SectionComponent implements OnInit {
  classes: Clas[];
  selectedClass: Clas;
  sections: Section[];
  selectedSection: Section;
  addingSection = false;
  error: any;

  constructor(
    private router: Router,
    private _cookieService: CookieService,
    private classService: ClassService,
    private sectionService: SectionService) { }

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
    this.getSections(this.selectedClass.id);
    this._cookieService.put("classId", "" + this.selectedClass.id);
    this._cookieService.put("className", this.selectedClass.className);
    //this.addSection();
    this.addingSection = false;
  }

  getSections(id: number) {
    this.sectionService
      .getSections(id)
      .then(sections => this.sections = sections)
      .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getClasses();
    this.selectedClass = new Clas(0, "");
  }

  onSelect(section: Section) {
    this.selectedSection = section;
    this.addingSection = false;
  }

  close(savedSection: Section) {
    this.addingSection = false;
    if (savedSection) { this.getSections(this.selectedSection.id); }
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  addSection() {
    if (this.addingSection) {
      this.addingSection = false;
    } else {
      this.addingSection = true;
    }
    //this.addingSection = true;
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