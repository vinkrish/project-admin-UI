import { Injectable }     from '@angular/core';
import { Headers, Http }  from '@angular/http';
import { CookieService }  from 'angular2-cookie/core';
import { Section }        from './section';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SectionService {
  private sectionUrl = 'http://localhost:8080/guldu/webapi/section';
  private authToken: string;

  constructor(private http: Http, private cookieService: CookieService) {
    this.authToken = this.cookieService.get("auth_token");
  }

  getSections(id: number): Promise<Section[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.sectionUrl}/class/${id}`;
    return this.http
      .get(url, { headers: headers })
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getSection(classId: number, sectionId: number) {
    return this.getSections(classId)
      .then(sections => sections.find(section => section.id === sectionId));
  }

  save(section: Section): Promise<Section> {
    if (section.id) {
      return this.put(section);
    }
    return this.post(section);
  }

  delete(section: Section) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.sectionUrl}/${section.id}`;
    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  private post(section: Section): Promise<Section> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Bearer ${this.authToken}`);
    return this.http
      .post(this.sectionUrl, JSON.stringify(section), { headers: headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private put(section: Section) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Bearer ${this.authToken}`);
    let url = `${this.sectionUrl}/${section.id}`;
    return this.http
      .put(url, JSON.stringify(section), { headers: headers })
      .toPromise()
      .then(() => section)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}