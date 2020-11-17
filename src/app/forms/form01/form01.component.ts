import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form01',
  templateUrl: './form01.component.html',
  styleUrls: ['./form01.component.scss']
})
export class Form01Component implements OnInit {

  placeholders = {
    username: 'introduce tu usuario',
    password: 'introduce tu password'
  };
  receivedName = '';
  receivedPassword = '';

  constructor() { }

  // tslint:disable-next-line: typedef
  recibirDatos(user, password){
    this.receivedName = user.value;
    this.receivedPassword = password.value;
  }

  ngOnInit(): void {
  }

}
