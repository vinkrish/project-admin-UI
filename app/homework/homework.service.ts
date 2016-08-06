import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import { Homework }      from './homework';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeworkService {
  private homeworkUrl = 'app/homework';
  private authToken: string;

  constructor(private http: Http, private cookieService:CookieService) {
    this.authToken = this.cookieService.get("auth_token");
  }

  getHomework(): Promise<Homework[]> {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);

    return this.http
               .get(this.homeworkUrl, {headers: headers})
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }
  save(homework: Homework): Promise<Homework>  {
    if (homework.Id) {
      return this.put(homework);
    }
    return this.post(homework);
  }
  delete(homework: Homework) {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);

    let url = `${this.homeworkUrl}/${homework.Id}`;
    return this.http
               .delete(url, {headers: headers})
               .toPromise()
               .catch(this.handleError);
  }

  private post(homework: Homework): Promise<Homework> {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);

    return this.http
               .post(this.homeworkUrl, JSON.stringify(homework), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  private put(homework: Homework) {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);
    
    let url = `${this.homeworkUrl}/${homework.Id}`;
    return this.http
               .put(url, JSON.stringify(homework), {headers: headers})
               .toPromise()
               .then(() => homework)
               .catch(this.handleError);
  }
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}