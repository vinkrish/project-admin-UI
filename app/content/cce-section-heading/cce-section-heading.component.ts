import { Component, OnInit }     from '@angular/core';
import { Router }                from '@angular/router';
import { CceCoscholastic }       from '../cce-coscholastic/cce-coscholastic';
import { CceSectionHeading }		 from './cce-section-heading';
import { SectionHeadingService } from './cce-section-heading.service';
import { CceCoscholasticService }from '../cce-coscholastic/cce-coscholastic.service';
import { CookieService }         from 'angular2-cookie/core';

@Component({
  moduleId: module.id,
  selector: 'ui-cce-section-heading',
  templateUrl: 'cce-section-heading.component.html',
  styleUrls: ['cce-section-heading.component.css']
})

export class SectionHeadingComponent implements OnInit {
  coscholastics: CceCoscholastic[];
  selectedCosch: CceCoscholastic;
  sectionHeadings: CceSectionHeading[];
  selectedSectionHeading: CceSectionHeading;
  addingSectionHeading = false;
  error: any;

  constructor(
    private router: Router,
    private _cookieService: CookieService,
    private coschService: CceCoscholasticService,
    private sectionHeadingService: SectionHeadingService) { }

  getCoscholastics() {
    this.coschService
      .getCceCoscholastics()
      .then(coscholastics => this.coscholastics = coscholastics)
      .catch(error => this.error = error);
    }

  coschSelected(classId) {
    //this.selectedClass = null;
    for (var i = 0; i < this.coscholastics.length; i++) {
      if (this.coscholastics[i].id == classId) {
        this.selectedCosch = this.coscholastics[i];
      }
    }
    this.getSectionHeadings(this.selectedCosch.id);
    this._cookieService.put("coscholasticId", "" + this.selectedCosch.id);
    this._cookieService.put("coscholasticName", this.selectedCosch.name);
    this.addingSectionHeading = false;
  }

  getSectionHeadings(id: number) {
    this.sectionHeadingService
      .getSectionHeadings(id)
      .then(sectionHeadings => this.sectionHeadings = sectionHeadings)
      .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getCoscholastics();
    this.selectedCosch = new CceCoscholastic(0, "");
  }

  onSelect(section: CceSectionHeading) {
    this.selectedSectionHeading = section;
    this.addingSectionHeading = false;
  }

  close(savedSection: CceSectionHeading) {
    this.addingSectionHeading = false;
    if (savedSection) { this.getSectionHeadings(this.selectedSectionHeading.id); }
  }

  addSectionHeading() {
    if (this.addingSectionHeading) {
      this.addingSectionHeading = false;
    } else {
      this.addingSectionHeading = true;
    }
    this.selectedSectionHeading = null;
  }

  gotoEdit(section: CceSectionHeading, event: any) {
    event.stopPropagation();
    this.router.navigate(['cce-section-heading/edit', section.id]);
  }

  deleteSection(section: CceSectionHeading, event: any) {
    event.stopPropagation();
    this.sectionHeadingService
      .delete(section)
      .then(res => {
        this.sectionHeadings = this.sectionHeadings.filter(h => h !== section);
        if (this.selectedSectionHeading === section) { this.selectedSectionHeading = null; }
      })
      .catch(error => this.error = error);
  }

}