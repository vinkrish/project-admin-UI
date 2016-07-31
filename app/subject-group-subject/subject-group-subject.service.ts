import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { SubjectGroupSubject } from './subject-group-subject';
@Injectable()
export class SubjectGroupSubjectService {
  //private subjectGroupSubjectUrl = 'app/subject-group-subject';
  private subjectGroupSubjectUrl =  'http://localhost:8080/guldu/webapi/subjectgroupsubject/subjectgroup';
  private postUrl = 'http://localhost:8080/guldu/webapi/subjectgroupsubject';
  constructor(private http: Http) { }
  getSubjectGroupSubjects(id: number): Promise<SubjectGroupSubject[]> {
    let url = `${this.subjectGroupSubjectUrl}/${id}`;
    return this.http.get(url)
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
    console.log(subjectGroupSubject.id);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.postUrl}/${subjectGroupSubject.id}`;
    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }

  private post(subjectGroupSubject: SubjectGroupSubject): Promise<SubjectGroupSubject> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
               .post(this.postUrl, JSON.stringify(subjectGroupSubject), {headers: headers})
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }

  private put(subjectGroupSubject: SubjectGroupSubject) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
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