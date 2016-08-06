import { Injectable }     from '@angular/core';
import { Headers, Http }  from '@angular/http';
import { CookieService }  from 'angular2-cookie/core';
import { Clas }           from '../class/clas';
import { SubjectTeacher } from './subject-teacher';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SubjectTeacherService {
  //private subjectTeacherUrl = 'app/subject-teacher';
  private subjectTeacherUrl =  'http://localhost:8080/guldu/webapi/subjectteacher/section';
  private postUrl = 'http://localhost:8080/guldu/webapi/subjectteacher';
  private sharedUrl = 'http://localhost:8080/guldu/webapi/shared/subjectteacher';
  private authToken: string;

  constructor(private http: Http, private cookieService:CookieService) {
    this.authToken = this.cookieService.get("auth_token");
  }
  
  getSubjectTeachers(id: number): Promise<SubjectTeacher[]> {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.subjectTeacherUrl}/${id}`;
    return this.http
               .get(url, {headers: headers})
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getSubjectTeacher(sectionId: number, subjectTeacherId: number) {
    return this.getSubjectTeachers(sectionId)
               .then(subjectTeachers => subjectTeachers.find(subjectTeacher => subjectTeacher.id === subjectTeacherId));
  }

  save(clas: Clas) {
    return this.post(clas);
  }

  delete(subjectTeacher: SubjectTeacher) {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.postUrl}/${subjectTeacher.id}`;
    return this.http
               .delete(url, {headers: headers})
               .toPromise()
               .catch(this.handleError);
  }

  private post(clas: Clas){
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);
    return this.http
               .post(this.sharedUrl, JSON.stringify(clas), {headers: headers})
               .toPromise()
               .catch(this.handleError);
  }

  put(subjectTeacher: SubjectTeacher) {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.postUrl}/${subjectTeacher.id}`;
    return this.http
               .put(url, JSON.stringify(subjectTeacher), {headers: headers})
               .toPromise()
               .then(() => subjectTeacher)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  
}