import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, UntypedFormGroup, Validators } from '@angular/forms';
import { LoginRequest } from './login-request';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from './auth.service';
import { LoginRespond } from './login-respond';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterLink,
    MatInputModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  
  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }
  form!: UntypedFormGroup;
onSubmit():void {
  var loginRequest : LoginRequest = {
    userName : this.form.controls["userName"].value,
    password : this.form.controls["password"].value,
};
var LoginRespond : LoginRespond;
this.AuthService.login(loginRequest).subscribe(
  {
    next: result => {
      LoginRespond = result;
      console.log(LoginRespond);
      if (result.success){
        localStorage.setItem("tokenValue", result.token);
      }
    },
    error:e => console.error(e)
  }
);
}
  constructor(private AuthService : AuthService){

  }

  

}
