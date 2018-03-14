import { Component, OnInit } from '@angular/core';
import { UpdateService } from './update.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name:string = 'Bob Smith';
  email:string = 'soccerfan123@gmail.com';
  phone:string = '123-456-7890';
  zip:string = '12345';
  birth:string ='12/24/1994';


  constructor() { }

  ngOnInit() {
  }

  updateInfo() {

  }
}
