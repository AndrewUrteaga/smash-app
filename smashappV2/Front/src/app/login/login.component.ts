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
loginInvalid = false
  constructor(private authService: AuthService,
              private router:Router) { }
  
  loginUser() {
    this.authService.loginUser(this.username, this.password).subscribe(
      (res) => {
        if(!res) {
          this.loginInvalid = true
        } else {
          this.router.navigate(['users'])
        }
       }
    )
  }
  ngOnInit() {
  }

}
