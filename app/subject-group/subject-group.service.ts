import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { SubjectGroup } from './subject-group';
@Injectable()
export class SubjectGroupService {
  private subjectGroupUrl = 'app/subject-group';
  constructor(private http: Http) { }
  getSubjectGroups(): Promise<SubjectGroup[]> {
    return this.http.get(this.subjectGroupUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }
  getSubjectGroup(id: number) {
    return this.getSubjectGroups()
               .then(subjectGroups => subjectGroups.find(subjectGroup => subjectGroup.Id === id));
  }
  save(subjectGroup: SubjectGroup): Promise<SubjectGroup>  {
    if (subjectGroup.Id) {
      return this.put(subjectGroup);
    }
    return this.post(subjectGroup);
  }
  delete(subjectGroup: SubjectGroup) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.subjectGroupUrl}/${subjectGroup.Id}`;
    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }

  private post(subjectGroup: SubjectGroup): Promise<SubjectGroup> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
               .post(this.subjectGroupUrl, JSON.stringify(subjectGroup), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  private put(subjectGroup: SubjectGroup) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.subjectGroupUrl}/${subjectGroup.Id}`;
    return this.http
               .put(url, JSON.stringify(subjectGroup), {headers: headers})
               .toPromise()
               .then(() => subjectGroup)
               .catch(this.handleError);
  }
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}