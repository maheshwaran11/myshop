import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  message: any;
  loading: boolean = false;
  token: any;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.token = window.localStorage.getItem('token');
    if(this.token) {
     // this.router.navigate(['dashboard']);
    }
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    this.loading = true;
    if(this.loginForm.invalid) {
      return;
    }
    const loginData = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    };

    if((this.loginForm.controls.username.value == 'admin') && 
      (this.loginForm.controls.password.value == 'admin')) {
        this.loading = false;
        window.localStorage.setItem('token', 'admin');
        window.localStorage.setItem('username', 'admin');
        this.router.navigate(['dashboard']);
      }  else {
        this.loading = false;
        this.invalidLogin = true;
      }

    // this.apiService.login(loginData).subscribe((data: any) => {
    //   this.message = data.message;

    //   if(data.token) {
    //     this.loading = false;
    //     window.localStorage.setItem('token', data.token);
    //     window.localStorage.setItem('username', data.username);

    //     this.router.navigate(['dashboard']);
    //   } else {
    //     this.loading = false;
    //     this.invalidLogin = true;
    //   }
    // })
  }
}
