import { Component, OnInit, Input } from '@angular/core';
// import { IServiceDescription } from 'src/app/models/servicedescription';
import { AccommodationService } from 'src/app/dataservices/accommodation.service';

@Component({
  selector: 'add-servicecomponent',
  templateUrl: './add-servicecomponent.component.html',
  styleUrls: ['./add-servicecomponent.component.css']
})
export class AddServicecomponentComponent implements OnInit {

  @Input()
  //model: IServiceDescription;  
  private serviceTypes: any[]=[];

  constructor(private accommodationService: AccommodationService) {
   
  }

  ngOnInit() {
    var response = this.accommodationService.getAccommodationTypes().subscribe((result) => {
      this.serviceTypes = result;
      console.log(this.serviceTypes)
    });
  }

}
