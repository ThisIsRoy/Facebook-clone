import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArticleService {
  
  constructor(private http: Http) { 	
   

  	
  }
  getJson() {
  	return this.http.get('/data/articles.json').toPromise()
  }
}