import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ''
  password = ''

  emailValid = new FormControl('', [Validators.minLength(5), Validators.email])
  passwordValid = new FormControl('', [Validators.minLength(5)])

  constructor() { }

  ngOnInit(): void {
  }

  errorValidEmail() {
    if(this.emailValid.invalid) {
      return 'E-mail is required'
    }
    return false
  }

  errorValidPassword() {
    if(this.passwordValid.invalid) {
      return 'Password is required'
    }
    return false
  }

}
