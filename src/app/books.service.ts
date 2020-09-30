import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ProductItem } from './products/productItem';

@Injectable({
  providedIn: 'root',
})
export class BooksService extends DataService {
  constructor() {
    super();
    this.productList = new Array<ProductItem>();
    let p1 = new ProductItem(
      1,
      'Angular cookbook',
      'Technical',
      240,
      'assets/images/angular_cookbook.jpg'
    );
    let p2 = new ProductItem(
      2,
      'Java cookbook',
      'Technical',
      240,
      'assets/images/java.jpg'
    );
    let p3 = new ProductItem(
      3,
      'Javascript cookbook',
      'Technical',
      240,
      'assets/images/javascript.jpg'
    );
    let p4 = new ProductItem(
      4,
      'Ajax cookbook',
      'Technical',
      240,
      'assets/images/Ajax.jpg'
    );
    let p5 = new ProductItem(
      5,
      'Python cookbook',
      'Technical',
      240,
      'assets/images/python.jpg'
    );
    let p6 = new ProductItem(
      6,
      'C++ cookbook',
      'Technical',
      240,
      'assets/images/C++.jpg'
    );
    let p7 = new ProductItem(
      7,
      'C cookbook',
      'Technical',
      240,
      'assets/images/c.jpg'
    );
    let p8 = new ProductItem(
      8,
      'C# cookbook',
      'Technical',
      240,
      'assets/images/c_sharp.jpg'
    );
    let p9 = new ProductItem(
      9,
      'CSS cookbook',
      'Technical',
      240,
      'assets/images/css.jpg'
    );
    let p10 = new ProductItem(
      10,
      'HTML cookbook',
      'Technical',
      240,
      'assets/images/html5.jpg'
    );
    this.productList.push(p1);
    this.productList.push(p2);
    this.productList.push(p3);
    this.productList.push(p4);
    this.productList.push(p5);
    this.productList.push(p6);
    this.productList.push(p7);
    this.productList.push(p8);
    this.productList.push(p9);
    this.productList.push(p10);
  }

  getProductList(): Array<ProductItem> {
    return this.productList;
  }
}
