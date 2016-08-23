import { Injectable }         from '@angular/core';
import { Headers, Http }      from '@angular/http';
import { CookieService }      from 'angular2-cookie/core';
import { ExamSubjectGroup }   from './exam-subject-group';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ExamSubjectGroupService {
  private esgUrl = 'http://localhost:8080/guldu/webapi/examsubjectgroup';
  private authToken: string;

  constructor(private http: Http, private cookieService: CookieService) {
    this.authToken = this.cookieService.get("auth_token");
  }

  getExamSubjectGroups(id: number): Promise<ExamSubjectGroup[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.esgUrl}/exam/${id}`;
    return this.http
      .get(url, { headers: headers })
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  delete(esg: ExamSubjectGroup) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.esgUrl}/${esg.id}`;
    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  post(esg: ExamSubjectGroup): Promise<ExamSubjectGroup> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Bearer ${this.authToken}`);
    return this.http
      .post(this.esgUrl, JSON.stringify(esg), { headers: headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}