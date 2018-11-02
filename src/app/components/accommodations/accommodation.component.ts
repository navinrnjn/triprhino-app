import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { AccommodationService } from '../../dataservices/accommodation.service';
import { Ammenities, IAmmenities } from '../../models/ammenities';
import { IServiceDescription, ISelectItem } from '../../models/servicedescription';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css'],
  providers: [NgbAccordionConfig, AccommodationService] // add the NgbAccordionConfig to the component providers
})
export class AccommodationComponent implements OnInit {

  private ammenities: IAmmenities[];
  private serviceDescriptionDataModel: IServiceDescription;
  private fileData: File[];
  private _modal = null;

  constructor(private config: NgbAccordionConfig, private accommodationService: AccommodationService) {
    this.config.type = "info";
    this.ammenities = new Ammenities().getAmenities();
    this.fileData = [];
  }

  ngOnInit() {
    let data: IServiceDescription = {
      price: 0,
      inventory: 0,
      ammenities: [],
      description: '',
      capacity: 0,
      extras: 0,
      serviceTypeId:'',
      imageData: [],
    }

    this.serviceDescriptionDataModel = data;   
  }

  bindModal(modal) { this._modal = modal; }

  open(client) {
    this._modal.open();
    console.log({ client });
  }

  toggleSelect(data: IAmmenities) {
    data.isPresent = !data.isPresent;
    if (data.isPresent) {
      this.addAmmenity(data);
    }
    else {
      this.removeAmmenity(data)
    }
  }

  removeAmmenity(data: IAmmenities): any {
    if (this.serviceDescriptionDataModel.ammenities.length > 0) {
      var index = this.serviceDescriptionDataModel.ammenities.findIndex(item => {
        return item == data.name;
      });
      if (index >= 0)
        this.serviceDescriptionDataModel.ammenities.splice(index, 1);
    }
  }
  addAmmenity(data: IAmmenities): any {
    this.serviceDescriptionDataModel.ammenities.push(data.name);
  }

  fileChange(element: any) {
    if (element) {
      this.fileData = element.target.files;
    }
  }

  onSave() {
    console.log(this.serviceDescriptionDataModel);
  }
}
