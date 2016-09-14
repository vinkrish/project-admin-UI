import { Injectable }         from '@angular/core';
import { Headers, Http }      from '@angular/http';
import { CookieService }      from 'angular2-cookie/core';
import { SubActivityScore }	  from './subactivity-score';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SubActivityScoreService {
  private scoreUrl = 'http://localhost:8080/guldu/webapi/subactivityscore';
  private headers;

  constructor(private http: Http, private cookieService: CookieService) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.headers.append('Authorization', `Bearer ${this.cookieService.get("auth_token")}`);
  }

  getMarks(subActivityId): Promise<SubActivityScore[]> {
    let url = `${this.scoreUrl}/subactivity/${subActivityId}`;
    return this.http
      .get(url, { headers: this.headers, body: '' })
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  post(scores: SubActivityScore[]) {
    return this.http
      .post(this.scoreUrl, JSON.stringify(scores), { headers: this.headers })
      .toPromise()
      .catch(this.handleError);
  }

  put(scores: SubActivityScore[]) {
    return this.http
      .put(this.scoreUrl, JSON.stringify(scores), { headers: this.headers })
      .toPromise()
      .catch(this.handleError);
  }

  delete(subActivityId) {
    let url = `${this.scoreUrl}/subactivity/${subActivityId}`;
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