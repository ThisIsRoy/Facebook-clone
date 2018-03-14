import { Component, OnInit } from '@angular/core';	
import { RegisterService } from './register.service';
import { Register } from './Register';
	
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [RegisterService]
})
export class LandingComponent implements OnInit {
  register = new Register('', '', '', '', '', '', '');
  //register:{}string;
  // this.register = new Register();
  // this.register.name: string;

  constructor(registerService: RegisterService) {
  	// this.registerForm = fb.group({
  	// 	'name': new Control(this.registerName, Validators.required),
  	// 	'email': new Control(this.registerEmail, Validators.required),
  	// });	
  }

  ngOnInit() {
  }

  redirect() {
  	window.location.href = '/main';
  }
  // onSubmit(f: any) {
  // 	let registerData = JSON.stringify(f.value);
  // 	let response = this.registerService.validateForm(registerData[name], registerData[password], registerData[password2]);
  // 	if (response[0]) {

  // 	}
  // }

  get registerForm() {
  	return JSON.stringify(this.register);
  }
}
