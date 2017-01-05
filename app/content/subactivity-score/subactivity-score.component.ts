import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { Clas }                 from '../class/clas';
import { Section }			        from '../section/section';
import { Student }				      from '../student/student';
import { ClassService }         from '../class/class.service';
import { SectionService }		    from '../section/section.service';
import { StudentService }       from '../student/student.service';
import { SubjectStudents }      from '../subject-student/subject-students';
import { SubjectStudentService }from '../subject-student/subject-student.service';
import { Exam }                 from '../exam/exam';
import { ExamService }          from '../exam/exam.service';
import { ExamSubject }          from '../exam-subject/exam-subject';
import { ExamSubjectService }   from '../exam-subject/exam-subject.service';
import { Activity }             from '../activity/activity';
import { ActivityService }      from '../activity/activity.service';
import { SubActivity }          from '../subactivity/subactivity';
import { SubActivityService }   from '../subactivity/subactivity.service';
import { SubActivityScore }     from './subactivity-score';
import { SubActivityScoreService } from './subactivity-score.service';
import { CookieService }		    from 'angular2-cookie/core';

@Component({
  moduleId: module.id,
  selector: 'ui-subactivity-score',
  templateUrl: 'subactivity-score.component.html',
  styleUrls: ['subactivity-score.component.css']
})

export class SubActivityScoreComponent implements OnInit {
  classes: Clas[];
  selectedClass: Clas;
  sections: Section[];
  selectedSection: Section;
  students: Student[];
  examStudents: Student[];
  subjectStudent: SubjectStudents;
  exams: Exam[];
  selectedExam: Exam;
  examSubjects: ExamSubject[];
  selectedExamSubject: ExamSubject;
  activities: Activity[];
  selectedActivity: Activity;
  subActivities: SubActivity[];
  selectedSubActivity: SubActivity;
  score: SubActivityScore[];
  existingScore: SubActivityScore[];
  isScorePresent: Boolean;
  error: any;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private classService: ClassService,
    private sectionService: SectionService,
    private studentService: StudentService,
    private examService: ExamService,
    private examSubjectService: ExamSubjectService,
    private ssService: SubjectStudentService,
    private activityService: ActivityService,
    private subActivityService: SubActivityService,
    private subActScoreService: SubActivityScoreService) { 
  }

  ngOnInit() {
    this.getClasses();
    this.selectedClass = new Clas(0, "");
    this.clearValues();
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
    this.clearValues();
    this.getSections(this.selectedClass.id);
    this.getExams(this.selectedClass.id);
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
    this.selectedExam = new Exam();
    this.selectedExamSubject = new ExamSubject();
    this.selectedActivity = new Activity();
    this.selectedSubActivity = new SubActivity();
    this.activities = [];
    this.subActivities = [];
    this.examStudents = [];
    this.score = [];
    this.students = [];
    this.existingScore = [];
    this.getStudents(this.selectedSection.id);
  }

  getStudents(id: number) {
    this.studentService
      .getStudents(id)
      .then(students => {
        this.students = students;
      })
      .catch(error => this.error = error);
  }

  getExams(id: number) {
    this.examService
      .getExams(id)
      .then(exams => this.exams = exams)
      .catch(error => this.error = error);
  }

  examSelected(examId) {
    this.examSubjects = null;
    for (var i = 0; i < this.exams.length; i++) {
      if (this.exams[i].id == examId) {
        this.selectedExam = this.exams[i];
      }
    }
    this.selectedExamSubject = new ExamSubject();
    this.selectedActivity = new Activity();
    this.activities = [];
    this.examStudents = [];
    this.score = [];
    this.existingScore = [];
    this.getExamSubjects(this.selectedExam.id);
  }

  getExamSubjects(id: number) {
    this.examSubjectService
      .getExamSubjects(id)
      .then(examSubjects => this.examSubjects = examSubjects)
      .catch(error => this.error = error)
  }

  examSubjectSelected(subjectId) {
    for (var i = 0; i < this.examSubjects.length; i++) {
      if (this.examSubjects[i].subjectId == subjectId) {
        this.selectedExamSubject = this.examSubjects[i];
      }
    }
    this.selectedActivity = new Activity();
    this.selectedSubActivity = new SubActivity();
    this.activities = [];
    this.subActivities = [];
    this.examStudents = [];
    this.score = [];
    this.existingScore = [];
    this.getSubjectStudents();
  }

  getSubjectStudents() {
    this.ssService
      .getSubjectStudent(this.selectedSection.id, this.selectedExamSubject.subjectId)
      .then(subjectStudent => {
        this.subjectStudent = subjectStudent;
        this.getActivites();
      })
      .catch(error => this.error = error);
  }

  initExamStudents() {
    if(typeof this.subjectStudent.studentIds != 'undefined') {
      var intIds = this.subjectStudent.studentIds.split(",").map(Number).filter(Boolean);
      for (let ids of intIds) {
        for (var i = 0; i < this.students.length; i++) {
          if (this.students[i].id == ids) {
            this.examStudents.push(this.students[i]);
            this.initScore(i);
          }
        }
      }
    }
  }

  initScore(index: number) {
    var subActscore = new SubActivityScore();
    subActscore.subActivityId = this.selectedSubActivity.id;
    subActscore.studentId = this.students[index].id;
    subActscore.grade = '';
    this.score.push(subActscore);
  }

  getActivites() {
    this.activityService
      .getActivities(this.selectedSection.id, this.selectedExam.id, this.selectedExamSubject.subjectId)
      .then(activities => this.activities = activities)
      .catch(error => this.error = error);
  }

  activitySelected(activityId) {
    for (var i = 0; i < this.activities.length; i++) {
      if (this.activities[i].id == activityId) {
        this.selectedActivity = this.activities[i];
      }
    }
    this.selectedSubActivity = new SubActivity();
    this.subActivities = [];
    this.examStudents = [];
    this.score = [];
    this.existingScore = [];
    this.getSubActivities();
  }

  getSubActivities() {
    this.subActivityService
      .getSubActivities(this.selectedActivity.id)
      .then(subActivities => this.subActivities = subActivities)
      .catch(error => this.error = error);
  }

  subActivitySelected(subActivityId) {
    for (var i = 0; i < this.subActivities.length; i++) {
      if (this.subActivities[i].id == subActivityId) {
        this.selectedSubActivity = this.subActivities[i];
      }
    }
    this.examStudents = [];
    this.score = [];
    this.existingScore = [];
    this.initExamStudents();
    this.getSubActivityScore();
  }

  getSubActivityScore() {
    this.subActScoreService
      .getScore(this.selectedSubActivity.id)
      .then(existingScore => {
        this.existingScore = existingScore;
        if(this.existingScore.length == 0) {
          this.isScorePresent = false;
        } else {
          this.isScorePresent = true;
          this.exportScore();
        }
      })
      .catch(error => this.error = error);
  }

  exportScore() {
    for (var i = 0; i < this.score.length; i++) {
      for (var j = 0; j < this.existingScore.length; j++) {
        if (this.existingScore[j].studentId == this.score[i].studentId) {
          this.score[i].id = this.existingScore[j].id;
          this.score[i].mark = this.existingScore[j].mark;
          this.score[i].grade = this.existingScore[j].grade;
        }
      }
    }
  }

  defaultScore() {
    for (var i = 0; i < this.score.length; i++) {
      if (typeof this.score[i].mark == 'undefined') {
        this.score[i].mark = 0;
      }
    }
  }

  clearValues() {
    this.selectedSection = new Section(0, "");
    this.selectedExam = new Exam();
    this.selectedExamSubject = new ExamSubject();
    this.selectedActivity = new Activity();
    this.selectedSubActivity = new SubActivity();
    this.exams = [];
    this.examStudents = [];
    this.examSubjects = [];
    this.activities = [];
    this.subActivities = [];
    this.score = [];
    this.students = [];
    this.existingScore = [];
  }

  save() {
    this.defaultScore();
    if (this.isScorePresent) {
      this.subActScoreService
        .put(this.score)
        .then()
        .catch(error => this.error = error)
    } else {
      this.subActScoreService
        .post(this.score)
        .then()
        .catch(error => this.error = error)
    }
  }

}