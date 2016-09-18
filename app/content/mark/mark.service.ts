import { Injectable }         from '@angular/core';
import { Headers, Http }      from '@angular/http';
import { CookieService }      from 'angular2-cookie/core';
import { Mark }	              from './mark';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MarkService {
  private markUrl = 'http://localhost:8080/guldu/webapi/mark';
  private headers;

  constructor(private http: Http, private cookieService: CookieService) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.headers.append('Authorization', `Bearer ${this.cookieService.get("auth_token")}`);
  }

  getMarks(examId, subjectId, sectionId): Promise<Mark[]> {
    let url = `${this.markUrl}/exam/${examId}/subject/${subjectId}/section/${sectionId}`;
    return this.http
      .get(url, { headers: this.headers, body: '' })
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  post(marks: Mark[]) {
    return this.http
      .post(this.markUrl, JSON.stringify(marks), { headers: this.headers })
      .toPromise()
      .catch(this.handleError);
  }

  put(marks: Mark[]) {
    console.log(marks);
    return this.http
      .put(this.markUrl, JSON.stringify(marks), { headers: this.headers })
      .toPromise()
      .catch(this.handleError);
  }

  delete(examId, subjectId, sectionId) {
    let url = `${this.markUrl}/exam/${examId}/subject/${subjectId}/section/${sectionId}`;
    return this.http
      .delete(url, { headers: this.headers, body: '' })
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}