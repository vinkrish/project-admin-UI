import { Injectable }           from '@angular/core';
import { Headers, Http }        from '@angular/http';
import { CookieService }        from 'angular2-cookie/core';
import { SubjectGroupSubject }  from './subject-group-subject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SubjectGroupSubjectService {
  //private subjectGroupSubjectUrl = 'app/subject-group-subject';
  private subjectGroupSubjectUrl =  'http://localhost:8080/guldu/webapi/subjectgroupsubject/subjectgroup';
  private postUrl = 'http://localhost:8080/guldu/webapi/subjectgroupsubject';
  private authToken: string;

  constructor(private http: Http, private cookieService:CookieService) {
    this.authToken = this.cookieService.get("auth_token");
  }
  
  getSubjectGroupSubjects(id: number): Promise<SubjectGroupSubject[]> {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.subjectGroupSubjectUrl}/${id}`;
    return this.http
               .get(url, {headers: headers})
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getSubjectGroupSubject(id: number) {
    return this.getSubjectGroupSubjects(id)
               .then(subjectGroupSubjects => subjectGroupSubjects.find(subjectGroupSubject => subjectGroupSubject.id === id));
  }

  save(subjectGroupSubject: SubjectGroupSubject): Promise<SubjectGroupSubject>  {
    if (subjectGroupSubject.id) {
      return this.put(subjectGroupSubject);
    }
    return this.post(subjectGroupSubject);
  }

  delete(subjectGroupSubject: SubjectGroupSubject) {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.postUrl}/${subjectGroupSubject.id}`;
    return this.http
               .delete(url, {headers: headers})
               .toPromise()
               .catch(this.handleError);
  }

  private post(subjectGroupSubject: SubjectGroupSubject): Promise<SubjectGroupSubject> {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);
    return this.http
               .post(this.postUrl, JSON.stringify(subjectGroupSubject), {headers: headers})
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }

  private put(subjectGroupSubject: SubjectGroupSubject) {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.postUrl}/${subjectGroupSubject.id}`;
    return this.http
               .put(url, JSON.stringify(subjectGroupSubject), {headers: headers})
               .toPromise()
               .then(() => subjectGroupSubject)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  
}