import { Component, OnInit } from '@angular/core';
import { AddToCartService } from '../add-to-cart.service';
import { ProductItem } from '../products/productItem';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  productList: Array<any>;
  bill: number = 0;

  constructor(private cartService: AddToCartService) {}

  ngOnInit(): void {
    this.productList = this.cartService.getProductsInCart();
    for (var i = 0; i < this.productList.length; i++) {
      this.bill += this.productList[i].num * this.productList[i].price;
    }
  }

  remove(name: string) {
    this.cartService.removeFromCart(name);
  }
}
