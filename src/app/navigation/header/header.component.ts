import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() SideNavigationToggle = new EventEmitter();

  constructor(public auth : AuthService,private router : Router){}

  ngOnInit(): void {
  }

  onToggleOpenSidenav(){
    this.SideNavigationToggle.emit();
  }

  onLogout(){
    sessionStorage.clear();
    this.router.navigateByUrl('/home')
  }

}
