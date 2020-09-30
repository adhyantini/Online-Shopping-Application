import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-price-updater',
  templateUrl: './price-updater.component.html',
  styleUrls: ['./price-updater.component.css'],
})
export class PriceUpdaterComponent implements OnInit {
  @Input() //Parent to child
  pricevalue: number; //will be set by the parent

  //custom event
  @Output() //emit it to the parent
  update = new EventEmitter<number>();
  constructor() {}
  updatePrice() {
    //the new value must be sent back to the parent
    //emit a custom event with the latest price back to the parent
    this.update.emit(this.pricevalue);
  }

  ngOnInit() {}
}
