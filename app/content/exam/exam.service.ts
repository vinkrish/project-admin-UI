import { Injectable }         from '@angular/core';
import { Headers, Http }      from '@angular/http';
import { CookieService }      from 'angular2-cookie/core';
import { Exam }               from './exam';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ExamService {
  private examUrl = 'http://localhost:8080/guldu/webapi/exam';
  private authToken: string;

  constructor(private http: Http, private cookieService: CookieService) {
    this.authToken = this.cookieService.get("auth_token");
  }

  getExams(id: number): Promise<Exam[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.examUrl}/class/${id}`;
    return this.http
      .get(url, { headers: headers })
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getExam(classId: number, examId: number) {
    return this.getExams(classId)
      .then(exams => exams.find(exam => exam.id === examId));
  }

  save(exam: Exam): Promise<Exam> {
    if (exam.id) {
      return this.put(exam);
    }
    return this.post(exam);
  }

  delete(exam: Exam) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.examUrl}/${exam.id}`;
    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  private post(exam: Exam): Promise<Exam> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Bearer ${this.authToken}`);
    return this.http
      .post(this.examUrl, JSON.stringify(exam), { headers: headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private put(exam: Exam) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.examUrl}/${exam.id}`;
    return this.http
      .put(url, JSON.stringify(exam), { headers: headers })
      .toPromise()
      .then(() => exam)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}