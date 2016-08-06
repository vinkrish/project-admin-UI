import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { Clas }          from './clas';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClassService {
  //private classUrl = 'app/class/classes';
  //private classUrl = 'app/class/classes.json';
  private classUrl = 'http://localhost:8080/guldu/webapi/class/school';
  private postUrl = 'http://localhost:8080/guldu/webapi/class';
  private authToken: string;

  constructor(private http: Http, private cookieService:CookieService) {
    this.authToken = this.cookieService.get("auth_token");
  }

  getClasses(): Promise<Clas[]> {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.classUrl}/${+this.cookieService.get("schoolId")}`;
    return this.http
               .get(url, {headers: headers})
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getClass(id: number) {
    return this.getClasses()
               .then(classes => classes.find(clas => clas.id === id));
  }

  save(clas: Clas): Promise<Clas>  {
    if (clas.id) {
      return this.put(clas);
    }
    return this.post(clas);
  }

  delete(clas: Clas) {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.postUrl}/${clas.id}`;
    return this.http
               .delete(url, {headers: headers})
               .toPromise()
               .catch(this.handleError);
  }

  private post(clas: Clas): Promise<Clas> {
    clas.id = 0;
    clas.schoolId = + this.cookieService.get("schoolId");
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);
    return this.http
               .post(this.postUrl, JSON.stringify(clas), {headers: headers})
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }

  private put(clas: Clas) {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.postUrl}/${clas.id}`;
    return this.http
               .put(url, JSON.stringify(clas), {headers: headers})
               .toPromise()
               .then(() => clas)
               .catch(this.handleError);
  }
  
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}