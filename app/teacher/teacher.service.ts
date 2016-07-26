import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {CookieService} from 'angular2-cookie/core';
import { Teacher } from './teacher';

@Injectable()
export class TeacherService {
  //private teacherUrl = 'app/teacher/classes';
  //private teacherUrl = 'app/teacher/teachers.json';
  private teacherUrl = 'http://localhost:8080/guldu/webapi/teacher/school';
  private postUrl = 'http://localhost:8080/guldu/webapi/teacher';
  
  constructor(private http: Http, private _cookieService:CookieService) { }

  getTeachers(): Promise<Teacher[]> {
    let url = `${this.teacherUrl}/${+this._cookieService.get("schoolId")}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getTeacher(id: number) {
    return this.getTeachers()
               .then(teachers => teachers.find(teacher => teacher.id === id));
  }

  save(teacher: Teacher): Promise<Teacher>  {
    if (teacher.id) {
      return this.put(teacher);
    }
    return this.post(teacher);
  }

  delete(teacher: Teacher) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.postUrl}/${teacher.id}`;
    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }

  private post(teacher: Teacher): Promise<Teacher> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    teacher.schoolId = +this._cookieService.get("schoolId");
    return this.http
               .post(this.postUrl, JSON.stringify(teacher), {headers: headers})
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }

  private put(teacher: Teacher) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.postUrl}/${teacher.id}`;
    return this.http
               .put(url, JSON.stringify(teacher), {headers: headers})
               .toPromise()
               .then(() => teacher)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}