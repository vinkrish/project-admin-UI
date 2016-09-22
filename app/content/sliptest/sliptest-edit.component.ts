import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { Sliptest }        from './sliptest';
import { SliptestService } from './sliptest.service';
import { CookieService }   from 'angular2-cookie/core';

@Component({
  moduleId: module.id,
  selector: 'ui-sliptest-detail',
  templateUrl: 'sliptest-edit.component.html',
  styleUrls: ['sliptest-edit.component.css']
})

export class SliptestEditComponent implements OnInit, OnDestroy {
  sliptest: Sliptest;
  @Output() close = new EventEmitter();
  error: any;
  sub: any;
  navigated = false;
  className: string = this.cookieService.get("className");
  classId: number = +this.cookieService.get("classId");
  sectionName: string = this.cookieService.get("sectionName");
  sectionId: number = +this.cookieService.get("sectionId");
  subjectName: string = this.cookieService.get("subjectName");
  subjectId: number = +this.cookieService.get("subjectId");

  constructor(
    private route: ActivatedRoute,
    private cookieService:CookieService,
    private sliptestService: SliptestService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let sliptestId = +params['id'];
        this.navigated = true;
        this.sliptestService.getSliptest(this.sectionId, this.subjectId, sliptestId)
            .then(sliptest => this.sliptest = sliptest);
      } else {
        this.navigated = false;
        this.sliptest = new Sliptest();
        this.sliptest.sectionId = this.sectionId;
        this.sliptest.subjectId = this.subjectId;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save() {
    this.sliptestService
        .save(this.sliptest)
        .then(sliptest => {
          this.sliptest = sliptest;
          this.goBack(sliptest);
        })
        .catch(error => this.error = error);
  }

  goBack(savedSliptest: Sliptest = null) {
    this.close.emit(savedSliptest);
    if (this.navigated) { window.history.back(); }
  }

}