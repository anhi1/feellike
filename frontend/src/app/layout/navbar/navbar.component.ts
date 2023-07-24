import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  isAdmin = false;
  isOwner = false;
  fullName = '';

  constructor(public authService: AuthService) {}

 
  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(loggedIn => this.isLoggedIn = loggedIn);
    this.authService.isAdmin.subscribe(admin => this.isAdmin = admin);
    this.authService.isOwner.subscribe(owner => this.isOwner = owner);
    // this.authService.currentUserName.subscribe(currentUserName => this.username = currentUserName);
}


}
