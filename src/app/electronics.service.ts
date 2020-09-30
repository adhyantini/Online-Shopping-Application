import { Injectable } from '@angular/core';
import { ProductItem } from './products/productItem';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class ElectronicsService extends DataService {
  productList = Array<ProductItem>();
  constructor() {
    super();
    let p1 = new ProductItem(
      1,
      'MotoG4',
      'Mobiles',
      24000,
      'assets/images/moto.jpg'
    );
    let p2 = new ProductItem(
      2,
      'SonyDSC',
      'Camera',
      64000,
      'assets/images/sony.jpg'
    );
    let p3 = new ProductItem(
      3,
      'Lenovo110',
      'Laptops',
      54000,
      'assets/images/lenovo.jpg'
    );
    let p4 = new ProductItem(
      4,
      'Xiomi55',
      'Mobiles',
      14000,
      'assets/images/xiomi.jpg'
    );
    let p5 = new ProductItem(
      5,
      'Samsung Galaxy',
      'Mobiles',
      44000,
      'assets/images/galaxy.jpg'
    );
    this.productList.push(p1);
    this.productList.push(p2);
    this.productList.push(p3);
    this.productList.push(p4);
    this.productList.push(p5);
  }
  getProductList(): Array<ProductItem> {
    return this.productList;
  }
}
