import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username
password
loginInvalid = false;

  constructor(private authService: AuthService,
              private router:Router) { }
  
  login(formValues) {
    this.authService.loginUser(formValues.username, formValues.password)
    .subscribe(resp => {
        if(!resp) {
          this.loginInvalid = true
        } else {
          this.authService.isTokenBad
          this.authService.setToken
          this.router.navigate(['/users'])
        }
       }
    )
  }
  ngOnInit() {
    function ci(wins, n) {
      var z, phat;
      
      z = 1.96;
      phat = 1 * wins / n;
  
      return (phat + z*z/(2*n) - z * Math.sqrt((phat*(1-phat)+z*z/(4*n))/n))/(1+z*z/n);
  
  }
  
  console.log(ci(1, 200));
  console.log(ci(9, 10));
  }

}
