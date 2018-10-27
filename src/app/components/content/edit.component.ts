import { Component, OnInit } from '@angular/core';
import { Content } from '../../models/content';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditContentComponent implements OnInit {

  content: Content;

  constructor() { }

  ngOnInit() {
    this.content = new Content();
  }

}
