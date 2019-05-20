import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { of, BehaviorSubject } from 'rxjs';
import { error } from '@angular/compiler/src/util';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn$ = new BehaviorSubject<boolean>(false);

  setLoggedIn(value: boolean) {
    console.log('set logged in ', value);
    this.isLoggedIn$.next(value)
  }

  private userSubject = new BehaviorSubject<Object>({ name: '' })
  userSubject$ = this.userSubject.asObservable();

  setUserSubject(currentUser) {
    this.userSubject.next(currentUser)
  }

  constructor(public JwtHelper: JwtHelperService,
    public http: HttpClient,
    public router: Router) { }

  loginUser(userName: string, password: string) {

    let loginInfo = { username: userName, password: password };
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.post('http://localhost:3000/api/auth/signin', loginInfo, options)
      .pipe(tap(data => {

        this.setUserSubject(data)
        localStorage.setItem('token', data['token']);
        this.setLoggedIn(true);
      }))
      .pipe(catchError(() => {
        return of(false)
      }))
  }

  isTokenBad(): boolean {
    let token = localStorage.getItem('token');
    return this.JwtHelper.isTokenExpired(token);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token')
  }

  logoutUser(): void {
    window.localStorage.removeItem('token');
    this.setUserSubject(null)
    this.setLoggedIn(false);
  }

  isAuthenticated() {
    const user = this.userSubject.getValue();
    
    if (user == null) {
      console.log("Not logged in");
      this.setLoggedIn(false);
      return false;
    } else {
      console.log("logged in");
      this.setLoggedIn(true);
      return true;
    }
  }

  checkAuthenticationStatus() {
    return this.http.get('http://localhost:3000/api/auth/checkuser')
      .pipe(
        tap(data => {
          if (data instanceof Object) {
            this.setUserSubject(data)
            this.isAuthenticated();
            console.log(data)
          } else return
        })
      )
  }

  registerUser(formData) {

    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.post('http://localhost:3000/api/auth/register', formData, options)
      .pipe(tap(data => {
        this.setUserSubject(data)
        localStorage.setItem('token', data['token']);
        console.log(data);
        this.setLoggedIn(true);       
      }))
      .pipe(catchError(() => {
        return of(false)
      }))
  }

  editUser(formData, id){
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put('http://localhost:3000/api/users/'+ id, formData, options)
      .pipe(tap(data => {
        this.setUserSubject(data)
        console.log(data);
        this.setLoggedIn(true);
      }), catchError( val => of(val))
      )
  }
}
