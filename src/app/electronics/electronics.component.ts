import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../products/productItem';
import { ElectronicsService } from '../electronics.service';
import { AuthServiceService } from '../auth-service.service';
import { AddToCartService } from '../add-to-cart.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css'],
})
export class ElectronicsComponent implements OnInit {
  isAdmin: boolean;
  productList = Array<ProductItem>();
  username = '';
  constructor(
    dataservice: ElectronicsService,
    private auth: AuthServiceService,
    private cartService: AddToCartService
  ) {
    this.productList = dataservice.getProductList();
  }

  delete(id: number) {
    for (var i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == id) {
        this.productList.splice(i, 1);
      }
    }
  }

  addToCart(name: string) {
    this.cartService.addElectronicsToCart(name);
  }
  ngOnInit() {
    this.username = sessionStorage.getItem('loggedUser');
    if (this.username == 'admin') {
      this.isAdmin = true;
    }
  }
}
