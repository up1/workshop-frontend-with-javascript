import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    email: null,
    password: null
  };

  constructor() { }

  ngOnInit(): void {
  }

  onLogin() {
    const {email, password} = this.form;
    console.table(this.form);
  }

}
