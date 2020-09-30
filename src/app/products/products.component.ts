import { Component, OnInit, Injectable } from '@angular/core';
import { ProductItem } from './productItem';
import { DataService } from '../data.service';
import { AuthServiceService } from '../auth-service.service';
import { AddToCartService } from '../add-to-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  // providers: [{ provide: DataService, useClass: DataService }],
})
export class ProductsComponent implements OnInit {
  isAdmin: boolean;
  productList = Array<ProductItem>();
  username = '';
  constructor(
    dataservice: DataService,
    private auth: AuthServiceService,
    private cartService: AddToCartService
  ) {
    this.productList = dataservice.getProducts();
  }

  delete(id: number) {
    for (var i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == id) {
        this.productList.splice(i, 1);
      }
    }
  }

  addToCart(id: number) {
    alert('Added to cart');
    this.cartService.addProductToCart(id);
  }

  ngOnInit() {
    this.username = sessionStorage.getItem('loggedUser');
    if (this.username == 'admin') {
      this.isAdmin = true;
    }
    // this.auth.getUserName().subscribe((newusername) => {
    //   this.username = newusername;
    //   console.log(`USERNAME IS ${this.username}`);
    // });
  }
}
