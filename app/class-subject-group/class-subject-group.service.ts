import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ClassSubjectGroup } from './class-subject-group';
@Injectable()
export class ClassSubjectGroupService {
  private classSubjectGroupUrl = 'app/class-subject-group';
  constructor(private http: Http) { }
  getClassSubjectGroups(): Promise<ClassSubjectGroup[]> {
    return this.http.get(this.classSubjectGroupUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }
  getClassSubjectGroup(id: number) {
    return this.getClassSubjectGroups()
               .then(classSubjectGroups => classSubjectGroups.find(classSubjectGroup => classSubjectGroup.Id === id));
  }
  save(classSubjectGroup: ClassSubjectGroup): Promise<ClassSubjectGroup>  {
    if (classSubjectGroup.Id) {
      return this.put(classSubjectGroup);
    }
    return this.post(classSubjectGroup);
  }
  delete(classSubjectGroup: ClassSubjectGroup) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.classSubjectGroupUrl}/${classSubjectGroup.Id}`;
    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }

  private post(classSubjectGroup: ClassSubjectGroup): Promise<ClassSubjectGroup> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
               .post(this.classSubjectGroupUrl, JSON.stringify(classSubjectGroup), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  private put(classSubjectGroup: ClassSubjectGroup) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.classSubjectGroupUrl}/${classSubjectGroup.Id}`;
    return this.http
               .put(url, JSON.stringify(classSubjectGroup), {headers: headers})
               .toPromise()
               .then(() => classSubjectGroup)
               .catch(this.handleError);
  }
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}