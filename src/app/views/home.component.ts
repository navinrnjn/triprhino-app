import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../dataservices/user-details.service';
import { AuthService } from 'angular-6-social-login';
import {ActivatedRoute} from '@angular/router';
import { AuthApiService } from '../dataservices/auth-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public data: any;
  public userData: any;
  constructor(public user: UserDetailsService,
              public authApiService: AuthApiService,
              public route: ActivatedRoute)
  {
    this.userData = this.user.getData();
  }

  ngOnInit() {
   // this.user.sessionOut();
  }
  logout() {
  /*  this.socialAuthService.signOut().then(data => {
    this.user.logOut();
    });*/
    this.authApiService.logout();
  }

}
