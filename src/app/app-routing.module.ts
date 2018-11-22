import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/shared/error.component';
import { AccommodationComponent } from './components/accommodations/accommodation.component';
import { EditContentComponent } from './components/content/edit.component';
import { ViewContentComponent } from './components/content/view.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'accommodations', component: AccommodationComponent },
  { path: 'contents/create', component: EditContentComponent },
  { path: 'contents/view', component: ViewContentComponent },
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
