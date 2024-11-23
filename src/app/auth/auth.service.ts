import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginRespond } from './login-respond';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private _authStatus =new BehaviorSubject <boolean> (false);
  public authStatus = this._authStatus.asObservable();
  private isAuthenticated() : boolean{
    return localStorage.getItem("tokenvalue") != null;
  }
  getToken(): string | null{
    return localStorage.getItem("tokenvalue");
  }
  private setAuthStatus(isAuthenticated: boolean): void{
    this._authStatus.next(isAuthenticated);
  }
  
  login(loginRequest: LoginRequest): Observable<LoginRespond>{
    return this.http.post<LoginRespond>(`${environment.baseUrl}/api/Admin/Login`,loginRequest)
  .pipe(tap(loginResult => {
    if (loginResult.success){
      localStorage.setItem("tokenvalue", loginResult.token);
      this.setAuthStatus(true);
    }

  }));
 }

  logout(){
    localStorage.removeItem("tokenValue");
    this.setAuthStatus(false);
  }

}
