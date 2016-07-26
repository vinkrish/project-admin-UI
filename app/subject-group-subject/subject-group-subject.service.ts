import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { SubjectGroupSubject } from './subject-group-subject';
@Injectable()
export class SubjectGroupSubjectService {
  private subjectGroupSubjectUrl = 'app/subject-group-subject';
  constructor(private http: Http) { }
  getSubjectGroupSubjects(): Promise<SubjectGroupSubject[]> {
    return this.http.get(this.subjectGroupSubjectUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }
  getSubjectGroupSubject(id: number) {
    return this.getSubjectGroupSubjects()
               .then(subjectGroupSubjects => subjectGroupSubjects.find(subjectGroupSubject => subjectGroupSubject.Id === id));
  }
  save(subjectGroupSubject: SubjectGroupSubject): Promise<SubjectGroupSubject>  {
    if (subjectGroupSubject.Id) {
      return this.put(subjectGroupSubject);
    }
    return this.post(subjectGroupSubject);
  }
  delete(subjectGroupSubject: SubjectGroupSubject) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.subjectGroupSubjectUrl}/${subjectGroupSubject.Id}`;
    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }

  private post(subjectGroupSubject: SubjectGroupSubject): Promise<SubjectGroupSubject> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
               .post(this.subjectGroupSubjectUrl, JSON.stringify(subjectGroupSubject), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  private put(subjectGroupSubject: SubjectGroupSubject) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.subjectGroupSubjectUrl}/${subjectGroupSubject.Id}`;
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