import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';
import { ApiService } from './dataservices/api.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/shared/error.component';
import { AccommodationComponent } from './components/accommodations/accommodation.component';
import { AddServicecomponentComponent } from './components/accommodations/add-servicecomponent/add-servicecomponent.component';
import { ModalcomponentComponent } from './components/accommodations/modal-dialog/modalcomponent/modalcomponent.component';
import { EditContentComponent } from './components/content/edit.component';
import { ViewContentComponent } from './components/content/view.component';
import { LayoutComponent } from './components/shared/layout.component';
import { FileuploadComponent } from './components/accommodations/file-upload/fileupload/fileupload.component';
import { HotelregistrationComponent } from './components/hotelregistration/hotelregistration.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error-interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthApiService } from './dataservices/auth-api.service';
import { UserDetailsService } from './dataservices/user-details.service';
import {AlertService} from './dataservices/alert.service';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    AccommodationComponent,
    AddServicecomponentComponent,
    ModalcomponentComponent,
    FileuploadComponent,
    EditContentComponent,
    ViewContentComponent,
    LayoutComponent,
    HotelregistrationComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
  ],
  providers: [ApiService,AuthApiService, UserDetailsService,AlertService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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