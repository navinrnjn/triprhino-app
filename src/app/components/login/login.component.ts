import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthApiService } from 'src/app/dataservices/auth-api.service';
import { UserDetailsService } from 'src/app/dataservices/user-details.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles:[]
})
export class LoginComponent implements OnInit {
  public responseData: any;
  public userPayLoad = {
  OpenId: '',
  Email: '',
  DisplayName: '',
  UserSource: ''  
  };  
  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
  constructor(private socialAuthService: AuthService,
     public authApiService: AuthApiService, public user:UserDetailsService, private formBuilder: FormBuilder,
     private route: ActivatedRoute,
     private router: Router,) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
   // reset login status
   this.authApiService.logout();

   // get return url from route parameters or default to '/'
   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}
// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  }

  this.loading = true;
  this.authApiService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate([this.returnUrl]);
          },
          error => {
              this.error = error;
              this.loading = false;
          });
}
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } 
    else{
      //custom registration for later
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        //this.apiConnect(userData, socialPlatform);        
      }
    );
  }
  apiConnect(userData, platform){
    
    this.userPayLoad.OpenId = userData.id;
    this.userPayLoad.Email = userData.email;
    this.userPayLoad.DisplayName = userData.name;
    this.userPayLoad.UserSource = platform;
    console.log(this.userPayLoad);
    this.authApiService.postUserData(this.userPayLoad).then(
      result => {
        this.responseData = result;
        if(this.responseData.userData){
          this.user.storeData(this.responseData.userData);
          alert(this.responseData.userData);
        }
      },
      err=>{
        console.log("Some error occured");
      }
    );
  }  
}

