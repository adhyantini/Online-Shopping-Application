import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../data.service';

import { ProductComponent } from './product.component';

fdescribe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
      providers: [{ provide: DataService, useClass: DataService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('The total number of products should be same as the ones being fetched from the service', () => {
    let dataservice = TestBed.inject(DataService);
    expect(component.products.length).toBe(dataservice.productList.length);
  });
});
