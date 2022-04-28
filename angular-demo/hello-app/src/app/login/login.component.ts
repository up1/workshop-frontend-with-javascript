import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';

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

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
  }

  onLogin() {
    const {email, password} = this.form;
    console.table(this.form);
    this.tokenService.saveToken("dummy token");
    window.location.reload();
  }

}
