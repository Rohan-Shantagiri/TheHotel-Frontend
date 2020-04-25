import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

// export interface user {
//   email: string,
//   password: string
// }

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public users = {
    Email: '',
    Password: ''
  };

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }
  onLoginClick() {
    this.auth.login(this.users)
      .subscribe(
        (result) => {
          if (result['auth']) {
            sessionStorage.setItem('authtoken', result.token);
            this.router.navigateByUrl('/home');
          } else {
            alert("Invalid Email/Password");
          }
        },
      )
  }

}
