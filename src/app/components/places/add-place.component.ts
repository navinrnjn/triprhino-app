import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from '../../dataservices/content.service';
import { Place } from '../../models/place';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styles: []
})
export class AddPlaceComponent implements OnInit {

  place: Place;

  constructor(private router: Router, private service: ContentService) { }

  ngOnInit() {
    this.place = new Place();
    this.place.UserId = '534c3aac-8b5a-4adb-be7a-2e92c48fcf5d';
  }

  addPlace(){
    this.service.addPlace(this.place).subscribe((res) => {
      if(res.status === 201){
        this.router.navigateByUrl('/places/info');
      }
      else{
        this.router.navigateByUrl('/error');
      }
    });
  }

}
