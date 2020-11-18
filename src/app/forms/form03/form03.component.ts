import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/classes/user';

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form03',
  templateUrl: './form03.component.html',
  styleUrls: ['./form03.component.scss'],
})
export class Form03Component implements OnInit {

  Genders: Gender[] = [
    {value: 'female-0', viewValue: 'Female'},
    {value: 'male-1', viewValue: 'Male'},
    {value: 'other-2', viewValue: 'Other'}
  ];

  states: string[] = [
    'Alemania', 'Austria', 'España', 'Francia', 'Grecia', 'Italia', 'Polonia', 'Portugal',
    'Reino Unido', 'Ucrania'
  ];

  hide = true;
  placeholders = {
    username: 'type your user name',
    userpass: 'type your password'
  };
  user: User = new User();

  constructor() {
    console.log(this.user.getUsername());
    console.log(this.user.getPassword());
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  createUser(form){
    console.log(form);
    this.user.setUsername(form.controls.username.value);
    this.user.setPassword(form.controls.userpass.value);
  }

}
