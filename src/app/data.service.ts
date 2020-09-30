import { Injectable } from '@angular/core';
import { ProductItem } from './products/productItem';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  productList = Array<ProductItem>();
  constructor() {
    console.log('DataService invoked');
    this.productList = new Array<ProductItem>();
  }

  getProducts() {
    return this.productList;
  }
  updatePrice(newprice: number, pid: number) {
    for (var i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == pid) this.productList[i].price = newprice;
    }
  }
}
