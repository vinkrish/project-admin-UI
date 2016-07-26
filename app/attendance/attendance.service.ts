import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Attendance } from './attendance';
@Injectable()
export class AttendanceService {
  private attendanceUrl = 'app/attendance';
  constructor(private http: Http) { }
  getAttendance(): Promise<Attendance[]> {
    return this.http.get(this.attendanceUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }
  save(attendance: Attendance): Promise<Attendance>  {
    if (attendance.Id) {
      return this.put(attendance);
    }
    return this.post(attendance);
  }
  delete(attendance: Attendance) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.attendanceUrl}/${attendance.Id}`;
    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }

  private post(attendance: Attendance): Promise<Attendance> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
               .post(this.attendanceUrl, JSON.stringify(attendance), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  private put(attendance: Attendance) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.attendanceUrl}/${attendance.Id}`;
    return this.http
               .put(url, JSON.stringify(attendance), {headers: headers})
               .toPromise()
               .then(() => attendance)
               .catch(this.handleError);
  }
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}