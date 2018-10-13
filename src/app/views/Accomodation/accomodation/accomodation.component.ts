import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css'],  ,
  providers: [NgbAccordionConfig] // add the NgbAccordionConfig to the component providers
})
export class AccomodationComponent implements OnInit {



  cities1: SelectItem[];
  selectedCity1: City;

  constructor(config: NgbAccordionConfig) {

    // customize default values of accordions used by this component tree
    config.closeOthers = true;
    config.type = 'info';

    this.cities1 = [
      { label: 'Select City', value: null },
      { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
      { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
      { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
      { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
      { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
    ];
  }

  ngOnInit() {
  }

}

interface City {
  name: string;
  code: string;
}
