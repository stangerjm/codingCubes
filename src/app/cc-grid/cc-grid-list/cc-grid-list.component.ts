import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'cc-grid-list',
  templateUrl: './cc-grid-list.component.html',
  styleUrls: ['./cc-grid-list.component.css']
})
export class CcGridListComponent implements OnInit, AfterContentChecked {

  colNum = 5;
  items = [];
  column = [];
  value = 'repeat(' + this.colNum + ', auto)';
  style = {
    'grid-template-columns' : this.value
  }
  gridWidth;
  itemWidth;
  itemStyle;

  constructor() { }

  ngOnInit() {
    for(let i = 0; i < this.colNum * this.colNum; i++){
      let item = {}

      this.column.push(item);

      if((i + 1) % this.colNum == 0){
        this.items.push({
            col: this.column
        });
        this.column = [];
      }
    }
  }

  ngAfterContentChecked(){
    this.gridWidth = document.getElementById("main-grid").clientWidth;
    this.style['height'] = this.gridWidth + 'px';

    let itemList = Array.prototype.slice.call(document.getElementsByClassName("cc-item"));
    for(let item of itemList){
      this.itemWidth = item.clientWidth;
      this.itemStyle = {"height": this.itemWidth + "px"};
      item.setAttribute("ngStyle", this.itemStyle);
    }
  }

}
