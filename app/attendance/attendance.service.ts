import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { Attendance }    from './attendance';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AttendanceService {
  private attendanceUrl = 'app/attendance';
  private authToken: string;

  constructor(private http: Http, private cookieService:CookieService) {
    this.authToken = this.cookieService.get("auth_token");
  }

  getAttendance(): Promise<Attendance[]> {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);

    return this.http
               .get(this.attendanceUrl, {headers: headers})
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
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);

    let url = `${this.attendanceUrl}/${attendance.Id}`;
    return this.http
               .delete(url, {headers: headers})
               .toPromise()
               .catch(this.handleError);
  }

  private post(attendance: Attendance): Promise<Attendance> {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);

    return this.http
               .post(this.attendanceUrl, JSON.stringify(attendance), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  private put(attendance: Attendance) {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);
    
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