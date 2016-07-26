import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subjects } from './subjects';
@Injectable()
export class SubjectService {
  private subjectUrl = 'app/subject';
  constructor(private http: Http) { }
  getSubjects(): Promise<Subjects[]> {
    return this.http.get(this.subjectUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }
  getSubject(id: number) {
    return this.getSubjects()
               .then(subjects => subjects.find(subject => subject.Id === id));
  }
  save(subject: Subjects): Promise<Subjects>  {
    if (subject.Id) {
      return this.put(subject);
    }
    return this.post(subject);
  }
  delete(subject: Subjects) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.subjectUrl}/${subject.Id}`;
    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }

  private post(subject: Subjects): Promise<Subjects> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
               .post(this.subjectUrl, JSON.stringify(subject), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  private put(subject: Subjects) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.subjectUrl}/${subject.Id}`;
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