import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './views/login.component';
import { HomeComponent } from './views/home.component';
import { HotelsComponent } from './views/hotels.component';
import { EventsComponent } from './views/events.component';
import { ErrorComponent } from './views/error.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'events', component: EventsComponent },
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
