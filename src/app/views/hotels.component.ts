import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../dataservices/api.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styles: []
})
export class HotelsComponent implements OnInit {

  constructor(private router: Router, private service: ApiService) { }

  ngOnInit() {
  }

  testservice(){
    alert(this.service.hello_world());
  }

  cancel(){
    this.router.navigateByUrl('/home');
  }

}
