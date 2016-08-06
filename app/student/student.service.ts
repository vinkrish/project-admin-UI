import { Injectable }     from '@angular/core';
import { Headers, Http }  from '@angular/http';
import { CookieService }  from 'angular2-cookie/core';
import { Student }        from './student';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StudentService {
  //private studentUrl = 'app/student';
  //private studentUrl = 'app/student/students.json';
  private studentUrl =  'http://localhost:8080/guldu/webapi/student/section';
  private postUrl = 'http://localhost:8080/guldu/webapi/student';
  private authToken: string;

  constructor(private http: Http, private cookieService:CookieService) {
    this.authToken = this.cookieService.get("auth_token");
  }
  
  getStudents(id: number): Promise<Student[]> {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.studentUrl}/${id}`;
    return this.http
               .get(url, {headers: headers})
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getStudent(sectionId: number, studentId: number) {
    return this.getStudents(sectionId)
               .then(students => students.find(student => student.id === studentId));
  }

  save(student: Student): Promise<Student>  {
    if (student.id) {
      return this.put(student);
    }
    return this.post(student);
  }

  delete(student: Student) {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.postUrl}/${student.id}`;
    return this.http
               .delete(url, {headers: headers})
               .toPromise()
               .catch(this.handleError);
  }

  private post(student: Student): Promise<Student> {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);
    return this.http
               .post(this.postUrl, JSON.stringify(student), {headers: headers})
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }

  private put(student: Student) {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.postUrl}/${student.id}`;
    return this.http
               .put(url, JSON.stringify(student), {headers: headers})
               .toPromise()
               .then(() => student)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  
}