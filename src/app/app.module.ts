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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    TemplateComponent,
    EventsComponent,
    HotelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
