import { Injectable } from '@angular/core';

@Injectable()
export class RegisterService {
  
  validateForm(username:string, password:string, password2:string){
  	
  	if (password !== password2) {
  		return [false, "Your passwords don't match!"]
  	}
  }

  constructor() { 	
  	

  	
  }

}