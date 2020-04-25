import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  public details = {
    FullName:'',
    Email:'',
    Address:'',
    dob:'',
    noofguests:'',
    roomtype:'',
  }
  constructor(public auth: AuthService,private router : Router) { }

  ngOnInit(): void {
  }

  onClick(){
    this.auth.booking(this.details)
    .subscribe(
      result => {
        this.router.navigateByUrl('/accomodation')
      },
      error => {
        console.log(error);
      }
    )
  }
}
