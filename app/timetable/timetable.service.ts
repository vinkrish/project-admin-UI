import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { Timetable }     from './timetable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TimetableService {
  private timetableUrl = 'app/timetable';
  private authToken: string;

  constructor(private http: Http, private cookieService:CookieService) {
    this.authToken = this.cookieService.get("auth_token");
  }

  getTimetables(): Promise<Timetable[]> {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);

    return this.http
               .get(this.timetableUrl, {headers: headers})
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  getTimetable(id: number) {
    return this.getTimetables()
               .then(timetables => timetables.find(timetable => timetable.Id === id));
  }

  save(timetable: Timetable): Promise<Timetable>  {
    if (timetable.Id) {
      return this.put(timetable);
    }
    return this.post(timetable);
  }

  delete(timetable: Timetable) {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);

    let url = `${this.timetableUrl}/${timetable.Id}`;
    return this.http
               .delete(url, {headers: headers})
               .toPromise()
               .catch(this.handleError);
  }

  private post(timetable: Timetable): Promise<Timetable> {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);

    return this.http
               .post(this.timetableUrl, JSON.stringify(timetable), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  private put(timetable: Timetable) {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);

    let url = `${this.timetableUrl}/${timetable.Id}`;
    return this.http
               .put(url, JSON.stringify(timetable), {headers: headers})
               .toPromise()
               .then(() => timetable)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}