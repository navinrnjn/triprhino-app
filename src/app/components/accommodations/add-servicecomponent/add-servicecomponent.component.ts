import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccommodationService } from '../../../dataservices/accommodation.service';
import { ISelectItem } from '../../../models/servicedescription';

@Component({
  selector: 'add-servicecomponent',
  templateUrl: './add-servicecomponent.component.html',
  styleUrls: ['./add-servicecomponent.component.css']
})
export class AddServicecomponentComponent implements OnInit {

  private _model: any;
  private serviceTypes: ISelectItem[];

  @Input()
  get model() {
    return this._model;
  }
  set model(value: any) {
    if (value) {
      this._model = value;
      this.modelChange.emit(this._model);
    }
  }


  @Output()
  modelChange = new EventEmitter();

  constructor(private accommodationService: AccommodationService) {

  }

  ngOnInit() {
    // To do : uncomment once the service is up
    // To Do - remove once the api is up.
    let serviceTypeData: ISelectItem[] = [
      { name: "1 Bed Room", value: "1", isEnabled: true },
      { name: "2 Bed Room", value: "2", isEnabled: true },
      { name: "3 Bed Room", value: "3", isEnabled: true },
      { name: "4 Bed Room", value: "4", isEnabled: true },
    ]

    this.serviceTypes = serviceTypeData;
    // var response = this.accommodationService.getAccommodationTypes().subscribe((result) => {

    // });
  }

}
