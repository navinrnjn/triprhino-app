import { Component, OnInit } from '@angular/core';

import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { AccomodationService } from './accomodation.service';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css'],
  providers: [NgbAccordionConfig, AccomodationService] // add the NgbAccordionConfig to the component providers
})
export class AccomodationComponent implements OnInit {

  constructor(private config: NgbAccordionConfig, private accomodationService: AccomodationService) {
    this.config.type="info";
  }

  ngOnInit() {
    var response = this.accomodationService.getAccommodationTypes().subscribe((result)=>{
      console.log(result);
    });
  }

}
