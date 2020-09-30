import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ProductItem } from '../products/productItem';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Array<ProductItem>;
  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    this.products = this.dataservice.getProducts();
  }
  setNewPrice(newprice: number, pid: number) {
    //update the corresponding product's price
    this.dataservice.updatePrice(newprice, pid);
  }
}
