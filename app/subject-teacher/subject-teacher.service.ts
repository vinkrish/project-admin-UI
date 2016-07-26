import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { SubjectTeacher } from './subject-teacher';
@Injectable()
export class SubjectTeacherService {
  private subjectTeacherUrl = 'app/subject-teacher';
  constructor(private http: Http) { }
  getSubjectTeachers(): Promise<SubjectTeacher[]> {
    return this.http.get(this.subjectTeacherUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }
  getSubjectTeacher(id: number) {
    return this.getSubjectTeachers()
               .then(subjectTeachers => subjectTeachers.find(subjectTeacher => subjectTeacher.Id === id));
  }
  save(subjectTeacher: SubjectTeacher): Promise<SubjectTeacher>  {
    if (subjectTeacher.Id) {
      return this.put(subjectTeacher);
    }
    return this.post(subjectTeacher);
  }
  delete(subjectTeacher: SubjectTeacher) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.subjectTeacherUrl}/${subjectTeacher.Id}`;
    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }

  private post(subjectTeacher: SubjectTeacher): Promise<SubjectTeacher> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
               .post(this.subjectTeacherUrl, JSON.stringify(subjectTeacher), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  private put(subjectTeacher: SubjectTeacher) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.subjectTeacherUrl}/${subjectTeacher.Id}`;
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