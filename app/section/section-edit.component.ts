import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Section }           from './section';
import { SectionService }   from './section.service';
@Component({
  selector: 'ui-section-detail',
  templateUrl: 'app/section/section-edit.component.html',
  styleUrls: ['app/section/section-edit.component.css']
})
export class SectionEditComponent implements OnInit, OnDestroy {
  @Input() section: Section;
  @Output() close = new EventEmitter();
  error: any;
  sub: any;
  navigated = false; // true if navigated here
  constructor(
    private sectionService: SectionService,
    private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.sectionService.getSection(id)
            .then(section => this.section = section);
      } else {
        this.navigated = false;
        this.section = new Section();
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  save() {
    this.sectionService
        .save(this.section)
        .then(hero => {
          this.section = hero; // saved hero, w/ id if new
          this.goBack(hero);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }
  goBack(savedSection: Section = null) {
    console.log("goBack from edit");
    this.close.emit(savedSection);
    if (this.navigated) { window.history.back(); }
  }
}