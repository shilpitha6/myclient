import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { Observable } from 'rxjs';
import { LoginRespond } from './login-respond';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  login(loginRequest: LoginRequest): Observable<LoginRespond>{
    return this.http.post<LoginRespond>(`${environment.baseUrl}/api/Admin/Login`,
      loginRequest);  }
}
