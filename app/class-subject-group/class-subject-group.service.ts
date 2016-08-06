import { Injectable }         from '@angular/core';
import { Headers, Http }      from '@angular/http';
import { CookieService }      from 'angular2-cookie/core';
import { ClassSubjectGroup }  from './class-subject-group';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClassSubjectGroupService {
  //private classSubjectGroupUrl = 'app/class-subject-group';
  private classSubjectGroupUrl =  'http://localhost:8080/guldu/webapi/classsubjectgroup/class';
  private postUrl = 'http://localhost:8080/guldu/webapi/classsubjectgroup';
  private authToken: string;

  constructor(private http: Http, private cookieService:CookieService) {
    this.authToken = this.cookieService.get("auth_token");
  }

  getClassSubjectGroups(id: number): Promise<ClassSubjectGroup[]> {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.classSubjectGroupUrl}/${id}`;
    return this.http
               .get(url, {headers: headers})
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getClassSubjectGroup(id: number) {
    return this.getClassSubjectGroups(id)
               .then(classSubjectGroups => classSubjectGroups.find(classSubjectGroup => classSubjectGroup.id === id));
  }

  save(classSubjectGroup: ClassSubjectGroup): Promise<ClassSubjectGroup>  {
    if (classSubjectGroup.id) {
      return this.put(classSubjectGroup);
    }
    return this.post(classSubjectGroup);
  }

  delete(classSubjectGroup: ClassSubjectGroup) {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.postUrl}/${classSubjectGroup.id}`;
    return this.http
               .delete(url, {headers: headers})
               .toPromise()
               .catch(this.handleError);
  }

  private post(classSubjectGroup: ClassSubjectGroup): Promise<ClassSubjectGroup> {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);
    return this.http
               .post(this.postUrl, JSON.stringify(classSubjectGroup), {headers: headers})
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }

  private put(classSubjectGroup: ClassSubjectGroup) {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.postUrl}/${classSubjectGroup.id}`;
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