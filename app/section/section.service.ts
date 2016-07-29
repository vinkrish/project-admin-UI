import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Section } from './section';
@Injectable()
export class SectionService {
  //private sectionUrl = 'app/section';
  //private sectionUrl = 'app/section/sections.json';
  private sectionUrl =  'http://localhost:8080/guldu/webapi/section/class';
  private postUrl = 'http://localhost:8080/guldu/webapi/section';
  constructor(private http: Http) { }
  getSections(id: number): Promise<Section[]> {
    let url = `${this.sectionUrl}/${id}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
  getSection(classId: number, sectionId: number) {
    return this.getSections(classId)
               .then(sections => sections.find(section => section.id === sectionId));
  }
  save(section: Section): Promise<Section>  {
    if (section.id) {
      return this.put(section);
    }
    return this.post(section);
  }
  delete(section: Section) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.postUrl}/${section.id}`;
    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }

  private post(section: Section): Promise<Section> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
               .post(this.postUrl, JSON.stringify(section), {headers: headers})
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }

  private put(section: Section) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.postUrl}/${section.id}`;
    return this.http
               .put(url, JSON.stringify(section), {headers: headers})
               .toPromise()
               .then(() => section)
               .catch(this.handleError);
  }
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}