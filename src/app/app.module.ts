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
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
