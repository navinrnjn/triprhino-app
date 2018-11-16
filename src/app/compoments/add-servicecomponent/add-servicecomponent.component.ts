import { Component, OnInit, Input } from '@angular/core';
import { AccomodationService } from 'src/app/views/Accomodation/accomodation/accomodation.service';

@Component({
  selector: 'add-servicecomponent',
  templateUrl: './add-servicecomponent.component.html',
  styleUrls: ['./add-servicecomponent.component.css']
})
export class AddServicecomponentComponent implements OnInit {

  @Input()  
  private serviceTypes: any[]=[];

  constructor(private accomodationService: AccomodationService) {
   
  }

  ngOnInit() {
    var response = this.accomodationService.getAccommodationTypes().subscribe((result) => {
      this.serviceTypes = result;
      console.log(this.serviceTypes)
    });
  }

}
