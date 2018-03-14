import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FriendService {
  
  // getJson() {
  // 	return this.initialItems;
  // }
  constructor(private http: Http) { 	
  	

  	
  }
  

  getJson() {
  	return this.http.get('/data/followers.json').toPromise()
  	
  }

}