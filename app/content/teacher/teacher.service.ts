import { Injectable }     from '@angular/core';
import { Headers, Http }  from '@angular/http';
import { CookieService }  from 'angular2-cookie/core';
import { Teacher }        from './teacher';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TeacherService {
  private teacherUrl = 'http://localhost:8080/guldu/webapi/teacher';
  private authToken: string;

  constructor(private http: Http, private cookieService: CookieService) {
    this.authToken = this.cookieService.get("auth_token");
  }

  getTeachers(): Promise<Teacher[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.teacherUrl}/school/${+this.cookieService.get("schoolId")}`;
    return this.http
      .get(url, { headers: headers })
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getTeacher(id: number) {
    return this.getTeachers()
      .then(teachers => teachers.find(teacher => teacher.id === id));
  }

  save(teacher: Teacher): Promise<Teacher> {
    if (teacher.id) {
      return this.put(teacher);
    }
    return this.post(teacher);
  }

  delete(teacher: Teacher) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.teacherUrl}/${teacher.id}`;
    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  private post(teacher: Teacher): Promise<Teacher> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Bearer ${this.authToken}`);
    teacher.schoolId = +this.cookieService.get("schoolId");
    return this.http
      .post(this.teacherUrl, JSON.stringify(teacher), { headers: headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private put(teacher: Teacher) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.teacherUrl}/${teacher.id}`;
    return this.http
      .put(url, JSON.stringify(teacher), { headers: headers })
      .toPromise()
      .then(() => teacher)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}