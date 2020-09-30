import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddToCartService } from '../add-to-cart.service';

import { ShoppingCartComponent } from './shopping-cart.component';

fdescribe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingCartComponent],
      providers: [{ provide: AddToCartService, useClass: AddToCartService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create  shopping cart component', () => {
    expect(component).toBeTruthy();
  });

  it('The total number of products in cart should be same as the ones being fetched from the service', () => {
    let dataservice = TestBed.inject(AddToCartService);
    expect(component.productList.length).toBe(
      dataservice.productsInCart.length
    );
  });
});
