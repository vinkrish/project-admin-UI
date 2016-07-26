import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Student } from './student';
@Injectable()
export class StudentService {
  private studentUrl = 'app/attendance';
  constructor(private http: Http) { }
  getStudents(): Promise<Student[]> {
    return this.http.get(this.studentUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }
  getStudent(id: number) {
    return this.getStudents()
               .then(students => students.find(student => student.Id === id));
  }
  save(student: Student): Promise<Student>  {
    if (student.Id) {
      return this.put(student);
    }
    return this.post(student);
  }
  delete(student: Student) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.studentUrl}/${student.Id}`;
    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }

  private post(student: Student): Promise<Student> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
               .post(this.studentUrl, JSON.stringify(student), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  private put(student: Student) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.studentUrl}/${student.Id}`;
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