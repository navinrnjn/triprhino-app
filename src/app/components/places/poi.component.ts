import { Component, OnInit } from '@angular/core';
import { POI } from '../../models/poi';

@Component({
  selector: 'app-poi',
  templateUrl: './poi.component.html'
})
export class POIComponent implements OnInit {

  poi: POI;

  constructor() { }

  ngOnInit() {
    this.poi = new POI();
  }

}
