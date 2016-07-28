import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {CookieService} from 'angular2-cookie/core';
import { SubjectGroup } from './subject-group';

@Injectable()
export class SubjectGroupService {
  //private subjectGroupUrl = 'app/subject-group/subject-groups';
  //private subjectGroupUrl = 'app/subject-group/subject-groups.json';
  private subjectGroupUrl = 'http://localhost:8080/guldu/webapi/subjectgroup/school';
  private postUrl = 'http://localhost:8080/guldu/webapi/subjectgroup';

  constructor(private http: Http, private _cookieService:CookieService) { }

  getSubjectGroups(): Promise<SubjectGroup[]> {
    let url = `${this.subjectGroupUrl}/${+this._cookieService.get("schoolId")}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
  getSubjectGroup(id: number) {
    return this.getSubjectGroups()
               .then(subjectGroups => subjectGroups.find(subjectGroup => subjectGroup.id === id));
  }
  save(subjectGroup: SubjectGroup): Promise<SubjectGroup>  {
    if (subjectGroup.id) {
      return this.put(subjectGroup);
    }
    return this.post(subjectGroup);
  }
  delete(subjectGroup: SubjectGroup) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.postUrl}/${subjectGroup.id}`;
    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }

  private post(subjectGroup: SubjectGroup): Promise<SubjectGroup> {
    subjectGroup.schoolId = + this._cookieService.get("schoolId");
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
               .post(this.postUrl, JSON.stringify(subjectGroup), {headers: headers})
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }

  private put(subjectGroup: SubjectGroup) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.postUrl}/${subjectGroup.id}`;
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