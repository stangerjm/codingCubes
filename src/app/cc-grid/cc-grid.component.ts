import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-grid',
  templateUrl: './cc-grid.component.html',
  styleUrls: ['./cc-grid.component.css']
})
export class CcGridComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  //empty method. Triggers UI update to keep width and height of grid when window resizes
  onResize(event){}

}
