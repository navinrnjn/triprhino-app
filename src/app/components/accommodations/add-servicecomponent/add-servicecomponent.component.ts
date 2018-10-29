import { Component, OnInit, Input, Output } from '@angular/core';
// import { IServiceDescription } from 'src/app/models/servicedescription';
import { AccommodationService } from 'src/app/dataservices/accommodation.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'add-servicecomponent',
  templateUrl: './add-servicecomponent.component.html',
  styleUrls: ['./add-servicecomponent.component.css']
})
export class AddServicecomponentComponent implements OnInit {

  private _model: any;

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

  @Input()
  //private serviceTypes: any[] = [];
  private serviceTypes = [{ Name: "A", AccommodationTypeId: "1" }, { Name: "B", AccommodationTypeId: "2" }, { Name: "C", AccommodationTypeId: "3" }]

  constructor(private accommodationService: AccommodationService) {
  }

  ngOnInit() {
    // var response = this.accommodationService.getAccommodationTypes().subscribe((result) => {
    //   this.serviceTypes = result;
    //   console.log(this.serviceTypes)
    // });
  }

}
