import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { Clas }                 from '../class/clas';
import { Section }			    from '../section/section';
import { SubjectTeacher }		from '../subject-teacher/subject-teacher'
import { Attendance }			from './attendance'
import { LeaveType }			from './leave-type'
import { ClassService }         from '../class/class.service';
import { SectionService }		from '../section/section.service';
import { AttendanceService }	from './attendance.service';
import { CookieService }		from 'angular2-cookie/core';

@Component({
  selector: 'ui-attendance',
  templateUrl: 'app/attendance/attendance.component.html',
  styleUrls:  ['app/attendance/attendance.component.css'],
  directives: []
})

export class AttendanceComponent {
	classes: Clas[];
	selectedClass: Clas;
	sections: Section[];
	selectedSection: Section;
	selectingSection = false;
	dateAttendance: string;
	markedAttendances: Attendance[];
	unmarkedAttendances: Attendance[];
	preparedAttendances: Attendance[];
	leaveTypes = [
		new LeaveType(""),
		new LeaveType("Absent")
	]
	error: any;

	constructor(
		private router: Router,
		private cookieService: CookieService,
		private classService: ClassService,
		private sectionService: SectionService,
		private attendanceService: AttendanceService) { }

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
		this.markedAttendances = null;
		this.unmarkedAttendances = null;
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
		this.markedAttendances = null;
		this.unmarkedAttendances = null;
	}

	fetchAttendances(){
		this.markedAttendances = [];
		this.unmarkedAttendances = [];
		this.getMarkedAttendance(this.selectedSection.id, this.dateAttendance);
		this.getUnmarkedAttendance(this.selectedSection.id, this.dateAttendance);
	}

	delete(atendance: Attendance, event: any) {
		event.stopPropagation();
    	this.attendanceService
      		.delete(atendance)
      		.then(() => this.fetchAttendances())
      		.catch(error => this.error = error);
	}

	prepareMarkedAttendance() {
		for(let att of this.unmarkedAttendances) {
			if(att.typeOfLeave == 'Absent') {
				this.preparedAttendances.push(att);
			}
		}
	}

	save() {
		event.stopPropagation();
		this.preparedAttendances = [];
		this.prepareMarkedAttendance();
		this.attendanceService
			.post(this.preparedAttendances)
			.then(() => this.fetchAttendances())
			.catch(error => this.error = error);
	}

	getMarkedAttendance(id: number, date: string) {
		this.attendanceService
			.dailyAttendanceMarked(id, date)
			.then(attendances => { 
				this.markedAttendances = attendances;
			})
			.catch(error => this.error = error )
	}

	getUnmarkedAttendance(id: number, date: string) {
		this.attendanceService
			.dailyAttendanceUnmarked(id, date)
			.then(attendances => { 
				this.unmarkedAttendances = attendances;
			})
			.catch(error => this.error = error )
	}

	ngOnInit() {
		this.getClasses();
		this.selectedClass = new Clas(0, "");
		this.selectedSection = new Section(0, "");
	}

}