import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt' 
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser;

  constructor(private JwtHelper: JwtHelperService,
              private http:HttpClient,
              private router:Router) {}
  
  loginUser(userName:string, password:string){

    let loginInfo = { username: userName, password: password };
    let options = { headers: new HttpHeaders( {'Content-Type' : 'application/json'})};
    
    return this.http.post('/signin', loginInfo, options)
      .pipe(tap((data) => {
        this.currentUser = data
      }))
      .pipe(catchError( err => {
        return of(false)
      }))
  }

  isTokenValid(): boolean {
    const token = localStorage.getItem('token');
    return this.JwtHelper.isTokenExpired(token);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  logout(): void {
    window.localStorage.removeItem('token')
  }

  isAuthenticated() {
    return false
  }
}
 
// export class AuthGuard {
//   constructor(private authService: AuthService) {}
//   canActivate() {
//     if (this.authService.isTokenValid) {
//       return true;
//     }
    
//     // nav to login 
//   }
// }