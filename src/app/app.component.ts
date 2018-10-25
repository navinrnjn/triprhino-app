import { Component } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<app-home *ngIf="ishomepage"></app-home><app-layout *ngIf="!ishomepage"></app-layout>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TRIPRHINO';
  ishomepage = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {  
      if (event instanceof NavigationStart ) {
        if(event.url === "/home" || event.url === "/"){
          this.ishomepage = true;
        }
      }
    });
  }
}
