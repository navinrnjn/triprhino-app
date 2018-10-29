import { Component, OnInit } from '@angular/core';

import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { AccommodationService } from '../../dataservices/accommodation.service';
import { Ammenities, IAmmenities } from '../../models/ammenities';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css'],
  providers: [NgbAccordionConfig, AccommodationService] // add the NgbAccordionConfig to the component providers
})
export class AccommodationComponent implements OnInit {

  private dataModel: any = { AccommodationType: "" };
  private ammenities: IAmmenities[];
  private fileData: File[];
  private _modal = null;

  constructor(private config: NgbAccordionConfig, private accommodationService: AccommodationService) {
    this.config.type = "info";
    this.ammenities = new Ammenities().getAmenities();
    this.fileData = [];
  }

  ngOnInit() {
  }

  bindModal(modal) { this._modal = modal; }

  open(client) {
    if (this._modal && this._modal != null) {
      this._modal.open();
    }
  }

  toggleSelect(data: IAmmenities) {
    data.isPresent = !data.isPresent;
  }

  fileChange(element: any) {
    if (element) {
      this.fileData = element.target.files;
    }
  }

  onSaveAction() {
    console.log(this.dataModel);
  }
}
