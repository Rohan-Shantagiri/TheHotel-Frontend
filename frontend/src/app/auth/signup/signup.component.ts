import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

// export interface user {
//   username: string,
//   email: string,
//   password: string,
//   repassword: string
// }

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public users = {
    Name: '',
    Password: '',
    Mobileno: '',
    Email: ''
  };

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegisterClick() {
    this.auth.registration(this.users)
      .subscribe(
        result => {
          if (result.auth) {
            sessionStorage.setItem('authtoken', result.token);
            this.router.navigateByUrl('/home');
          } else {
            alert(result.status);
          }
        },
        error => {
          console.log(error);
        }
      )
  }


}
