import { Component, OnInit } from '@angular/core';
import { ISelectItem } from '../../models/servicedescription';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { IAmmenities, Ammenities } from '../../models/ammenities';

@Component({
  selector: 'app-hotelregistration',
  templateUrl: './hotelregistration.component.html',
  styleUrls: ['./hotelregistration.component.css']
})
export class HotelregistrationComponent implements OnInit {


  private idTypes: ISelectItem[];
  private selectedIdType: string;
  private isUser: boolean = false;
  private _notificationModal = null;
  private _hotelRegistrationModal = null;
  private ammenities: IAmmenities[];

  constructor(private config: NgbAccordionConfig,) {
    this.config.type="info";
    this.ammenities = new Ammenities().getAmenities();
    let idTypeData: ISelectItem[] = [
      { name: "PAN", value: "1", isEnabled: true },
      { name: "Driving License", value: "2", isEnabled: true },
      { name: "Adhar Card", value: "3", isEnabled: true },
      { name: "Voter Id", value: "4", isEnabled: true },
    ];
    this.idTypes = idTypeData;
  }

  bindNotificationModal(modal) { this._notificationModal = modal; }
  bindHotelRegistrationModal(modal) { this._hotelRegistrationModal = modal; }

  ngOnInit() {
  }

  openNotificationModal(client) {
    this._notificationModal.open();
  }

  openHotelRegistrationModal(client) {
    this._hotelRegistrationModal.open();
  }

  submittFormData() {
    setTimeout(() => {
      this.openNotificationModal(null);
      this.isUser=true;
    }, 2000);
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
    // if (this.serviceDescriptionDataModel.ammenities.length > 0) {
    //   var index = this.serviceDescriptionDataModel.ammenities.findIndex(item => {
    //     return item == data.name;
    //   });
    //   if (index >= 0)
    //     this.serviceDescriptionDataModel.ammenities.splice(index, 1);
    // }
  }
  addAmmenity(data: IAmmenities): any {
    // this.serviceDescriptionDataModel.ammenities.push(data.name);
  }

}
