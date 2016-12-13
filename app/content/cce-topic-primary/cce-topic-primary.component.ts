import { Component, OnInit }     from '@angular/core';
import { Router }                from '@angular/router';
import { CceCoscholastic }       from '../cce-coscholastic/cce-coscholastic';
import { CceSectionHeading }     from '../cce-section-heading/cce-section-heading';
import { CceTopicPrimary }		   from './cce-topic-primary';
import { TopicPrimaryService }   from './cce-topic-primary.service';
import { CceCoscholasticService }from '../cce-coscholastic/cce-coscholastic.service';
import { SectionHeadingService } from '../cce-section-heading/cce-section-heading.service';
import { CookieService }         from 'angular2-cookie/core';

@Component({
  moduleId: module.id,
  selector: 'ui-cce-topic-primary',
  templateUrl: 'cce-topic-primary.component.html',
  styleUrls: ['cce-topic-primary.component.css']
})

export class TopicPrimaryComponent implements OnInit {
  coscholastics: CceCoscholastic[];
  selectedCosch: CceCoscholastic;
  sectionHeadings: CceSectionHeading[];
  selectedSectionHeading: CceSectionHeading;
  selectingSecHead = false;
  topicPrimarys: CceTopicPrimary[];
  selectedTopicPrimary: CceTopicPrimary;
  addingTopicPrimary = false;
  error: any;

  constructor(
    private router: Router,
    private _cookieService: CookieService,
    private coschService: CceCoscholasticService,
    private sectionHeadingService: SectionHeadingService,
    private topicPrimaryService: TopicPrimaryService) { }

  getCoscholastics() {
    this.coschService
      .getCceCoscholastics()
      .then(coscholastics => this.coscholastics = coscholastics)
      .catch(error => this.error = error);
    }

  coschSelected(coscholasticId) {
    for (var i = 0; i < this.coscholastics.length; i++) {
      if (this.coscholastics[i].id == coscholasticId) {
        this.selectedCosch = this.coscholastics[i];
      }
    }
    this.getSectionHeadings(this.selectedCosch.id);
    this.selectedSectionHeading = new CceSectionHeading(0, "");
    this._cookieService.put("coscholasticId", "" + this.selectedCosch.id);
    this._cookieService.put("coscholasticName", this.selectedCosch.name);
    this.addingTopicPrimary = false;
    this.selectingSecHead = false;
    this.topicPrimarys = null;
  }

  getSectionHeadings(coscholasticId) {
    this.sectionHeadingService
      .getSectionHeadings(coscholasticId)
      .then(sectionHeadings => this.sectionHeadings = sectionHeadings)
      .catch(error => this.error = error);
  }

  sectionHeadingSelected(sectionHeadingId) {
    for (var i = 0; i < this.sectionHeadings.length; i++) {
      if (this.sectionHeadings[i].id == sectionHeadingId) {
        this.selectedSectionHeading = this.sectionHeadings[i];
      }
    }
    this.getTopicPrimarys(this.selectedSectionHeading.id);
    this._cookieService.put("sectionHeadingId", "" + this.selectedSectionHeading.id);
    this._cookieService.put("sectionHeadingName", this.selectedSectionHeading.name);
    this.addingTopicPrimary = false;
    this.selectingSecHead = true;
  }

  getTopicPrimarys(id: number) {
    this.topicPrimaryService
      .getTopicPrimarys(id)
      .then(topicPrimarys => this.topicPrimarys = topicPrimarys)
      .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getCoscholastics();
    this.selectedCosch = new CceCoscholastic(0, "");
    this.selectedSectionHeading = new CceSectionHeading(0, "");
  }

  onSelect(topicPrimary: CceTopicPrimary) {
    this.selectedTopicPrimary = topicPrimary;
    this.addingTopicPrimary = false;
  }

  close(savedSection: CceTopicPrimary) {
    this.addingTopicPrimary = false;
    if (savedSection) { this.getTopicPrimarys(this.selectedTopicPrimary.id); }
  }

  addTopicPrimary() {
    if(this.selectingSecHead) {
        if (this.addingTopicPrimary) {
            this.addingTopicPrimary = false;
          } else {
            this.addingTopicPrimary = true;
      }
    }
    this.selectedTopicPrimary = null;
  }

  gotoEdit(topicPrimary: CceTopicPrimary, event: any) {
    event.stopPropagation();
    this.router.navigate(['cce-topic-primary/edit', topicPrimary.id]);
  }

  deleteTopicPrimary(topicPrimary: CceTopicPrimary, event: any) {
    event.stopPropagation();
    this.topicPrimaryService
      .delete(topicPrimary)
      .then(res => {
        this.topicPrimarys = this.topicPrimarys.filter(h => h !== topicPrimary);
        if (this.selectedTopicPrimary === topicPrimary) { this.selectedTopicPrimary = null; }
      })
      .catch(error => this.error = error);
  }

}