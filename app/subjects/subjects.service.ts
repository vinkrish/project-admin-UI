import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subjects }        from './subjects';
import { CookieService }  from 'angular2-cookie/core';
@Injectable()
export class SubjectsService {
  //private subjectUrl = 'app/subjects/subjects';
  //private subjectUrl = 'app/subjects/subjects.json';
  private subjectUrl = 'http://localhost:8080/guldu/webapi/subject/school';
  private postUrl = 'http://localhost:8080/guldu/webapi/subject';

  constructor(private http: Http, private _cookieService:CookieService) { }

  getSubjects(): Promise<Subjects[]> {
    let url = `${this.subjectUrl}/${+this._cookieService.get("schoolId")}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
  getSubject(id: number) {
    return this.getSubjects()
               .then(subjects => subjects.find(subject => subject.id === id));
  }
  save(subject: Subjects): Promise<Subjects>  {
    if (subject.id) {
      return this.put(subject);
    }
    return this.post(subject);
  }
  delete(subject: Subjects) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.postUrl}/${subject.id}`;
    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }

  private post(subject: Subjects): Promise<Subjects> {
    subject.schoolId = + this._cookieService.get("schoolId");
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
               .post(this.postUrl, JSON.stringify(subject), {headers: headers})
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }

  private put(subject: Subjects) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.postUrl}/${subject.id}`;
    return this.http
               .put(url, JSON.stringify(subject), {headers: headers})
               .toPromise()
               .then(() => subject)
               .catch(this.handleError);
  }
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}