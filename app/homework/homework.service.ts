import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Homework } from './homework';
@Injectable()
export class HomeworkService {
  private homeworkUrl = 'app/homework';
  constructor(private http: Http) { }
  getHomework(): Promise<Homework[]> {
    return this.http.get(this.homeworkUrl)
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
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.homeworkUrl}/${homework.Id}`;
    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }

  private post(homework: Homework): Promise<Homework> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
               .post(this.homeworkUrl, JSON.stringify(homework), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  private put(homework: Homework) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
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