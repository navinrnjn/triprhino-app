import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './/app-routing.module';

import { ApiService } from './dataservices/api.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home.component';
import { LoginComponent } from './views/login.component';
import { ErrorComponent } from './views/error.component';
import { TemplateComponent } from './views/template.component';
import { EventsComponent } from './views/events.component';
import { HotelsComponent } from './views/hotels.component';
import { AccomodationComponent } from './views/Accomodation/accomodation/accomodation.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddServicecomponentComponent } from './compoments/add-servicecomponent/add-servicecomponent.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";
import { RouterModule, Routes } from '@angular/router';
import { AuthApiService } from './dataservices/auth-api.service';
import { UserDetailsService } from './dataservices/user-details.service';
import { AlertComponent } from './views/alert.component';
import {AlertService} from './dataservices/alert.service';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeBackendProvider } from './helpers/fake-backend';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error-interceptor';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent }
  ];
// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("318747382261800")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("237803725768-b6k9goml4m417u67clitvrrjf4rbfsmv.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    TemplateComponent,
    EventsComponent,
    HotelsComponent,
    AccomodationComponent,
    AddServicecomponentComponent,
    AlertComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    SocialLoginModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService,AuthApiService, UserDetailsService,AlertService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
