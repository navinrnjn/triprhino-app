import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/shared/error.component';
import { AccommodationComponent } from './components/accommodations/accommodation.component';
import { PlacesComponent } from './components/places/places.component';
import { AddPlaceComponent } from './components/places/add-place.component';
import { POIComponent } from './components/places/poi.component';
import { PlaceInfoComponent } from './components/places/place-info.component';
import { SampleComponent } from './components/places/sample.component';
import { HotelregistrationComponent } from './components/hotelregistration/hotelregistration.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'accommodations', component: AccommodationComponent },
  { path: 'hotelresgistration', component: HotelregistrationComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'places/tell-us-about-your-place', component: AddPlaceComponent },
  { path: 'places/info', component: PlaceInfoComponent },
  { path: 'places/point-of-interests', component: POIComponent },
  { path: 'places/sample', component: SampleComponent },
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }