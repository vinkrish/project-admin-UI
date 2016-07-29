import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CookieService } from 'angular2-cookie/core';
import { Clas }          from './clas';

@Injectable()
export class ClassService {
  //private classUrl = 'app/class/classes';
  //private classUrl = 'app/class/classes.json';
  private classUrl = 'http://localhost:8080/guldu/webapi/class/school';
  private postUrl = 'http://localhost:8080/guldu/webapi/class';

  constructor(private http: Http, private _cookieService:CookieService) { }

  getClasses(): Promise<Clas[]> {
    let url = `${this.classUrl}/${+this._cookieService.get("schoolId")}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json())
               //.then(response => {console.log(response); return response.json().data})
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
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.postUrl}/${clas.id}`;
    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }

  private post(clas: Clas): Promise<Clas> {
    clas.id = 0;
    clas.schoolId = + this._cookieService.get("schoolId");
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
               .post(this.postUrl, JSON.stringify(clas), {headers: headers})
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }

  private put(clas: Clas) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
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