import { Component, OnInit } from '@angular/core';

import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { AccomodationService } from './accomodation.service';
import { Ammenities, IAmmenities } from '../../../models/ammenities';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css'],
  providers: [NgbAccordionConfig, AccomodationService] // add the NgbAccordionConfig to the component providers
})
export class AccomodationComponent implements OnInit {

  private ammenities: IAmmenities[];

  private fileData: File[];
  private serviceTypes: any[];

  constructor(private config: NgbAccordionConfig, private accomodationService: AccomodationService) {
    this.config.type = "info";
    this.ammenities = new Ammenities().getAmenities();
    this.fileData = [];
  }

  ngOnInit() {
    var response = this.accomodationService.getAccommodationTypes().subscribe((result) => {
      this.serviceTypes = result;
    });
  }

  toggleSelect(data: IAmmenities) {
    data.isPresent = !data.isPresent;
  }

  fileChange(element: any) {
    if (element) {
      this.fileData = element.target.files;
    }
  }
}