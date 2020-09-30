import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthServiceService, private router: Router) {}
  username: string;
  password: string;
  ngOnInit(): void {}

  loginCheck() {
    // this.auth.setUserName(this.username);
    sessionStorage.setItem('loggedUser', this.username);
    if (
      (this.username == 'user' && this.password == 'user') ||
      (this.username == 'admin' && this.password == 'admin')
    ) {
      this.router.navigateByUrl('/home');
    } else {
      alert('Invalid login');
    }
  }
}
