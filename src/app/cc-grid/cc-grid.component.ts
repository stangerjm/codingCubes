import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-grid',
  templateUrl: './cc-grid.component.html',
  styleUrls: ['./cc-grid.component.css']
})
export class CcGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectElement(){
    let el = document.getElementById("cc-col1-row4");
    el.style.backgroundColor = "blue";
  }

  onResize(event){
    console.log(event.target.innerWidth);
  }

}
