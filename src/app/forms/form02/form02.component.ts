import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/classes/user';

@Component({
  selector: 'app-form02',
  templateUrl: './form02.component.html',
  styleUrls: ['./form02.component.scss']
})
export class Form02Component implements OnInit {
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
