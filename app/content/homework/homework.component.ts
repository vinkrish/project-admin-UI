import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clas } from '../class/clas';
import { Section } from '../section/section';
import { SubjectTeacher } from '../subject-teacher/subject-teacher'
import { Homework } from './homework'
import { ClassService } from '../class/class.service';
import { SectionService } from '../section/section.service';
import { HomeworkService } from './homework.service';
import { CookieService } from 'angular2-cookie/core';

@Component({
  moduleId: module.id,
  selector: 'ui-homework',
  templateUrl: 'homework.component.html',
  styleUrls: ['homework.component.css']
})

export class HomeworkComponent {
  classes: Clas[];
  selectedClass: Clas;
  sections: Section[];
  selectedSection: Section;
  selectingSection = false;
  homeworkDate: Date;
  homeworks: Homework[];
  error: any;

  constructor(
	private router: Router,
	private cookieService: CookieService,
	private classService: ClassService,
	private sectionService: SectionService,
	private homeworkService: HomeworkService) {
  }

  ngOnInit() {
	this.getClasses();
	this.selectedClass = new Clas(0, "");
	this.selectedSection = new Section(0, "");
  }

  getClasses() {
	this.classService
	  .getClasses()
	  .then(classes => this.classes = classes)
	  .catch(error => this.error = error);
  }

  classSelected(classId) {
	for (var i = 0; i < this.classes.length; i++) {
	  if (this.classes[i].id == classId) {
		this.selectedClass = this.classes[i];
	  }
	}
	this.getSections(this.selectedClass.id);
	this.cookieService.put("classId", "" + this.selectedClass.id);
	this.cookieService.put("className", this.selectedClass.className);
	this.selectingSection = false;
	this.homeworks = null;
  }

  getSections(id: number) {
	this.sectionService
	  .getSections(id)
	  .then(sections => this.sections = sections)
	  .catch(error => this.error = error);
  }

  sectionSelected(sectionId) {
	for (var i = 0; i < this.sections.length; i++) {
	  if (this.sections[i].id == sectionId) {
		this.selectedSection = this.sections[i];
	  }
	}
	this.cookieService.put("sectionId", "" + this.selectedSection.id);
	this.cookieService.put("sectionName", this.selectedSection.sectionName);
	this.selectingSection = true;
	this.homeworks = null;
  }

  getHomeworks(id: number, date: Date) {
	this.homeworkService
	  .getHomeworks(id, date)
	  .then(homeworks => {
		this.homeworks = homeworks;
	  })
	  .catch(error => this.error = error)
  }

  fetchHomeworks() {
	this.getHomeworks(this.selectedSection.id, this.homeworkDate);
  }

  save(homework: Homework, event: any) {
	event.stopPropagation();
	this.homeworkService
	  .save(homework)
	  .then(() => this.fetchHomeworks())
	  .catch(error => this.error = error);
  }

  delete(homework: Homework, event: any) {
	event.stopPropagation();
	this.homeworkService
	  .delete(homework)
	  .then(() => this.fetchHomeworks())
	  .catch(error => this.error = error);
  }

}