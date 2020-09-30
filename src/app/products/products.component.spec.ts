import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BooksService } from '../books.service';
import { DataService } from '../data.service';

import { ProductsComponent } from './products.component';

fdescribe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ProductsComponent],
      providers: [{ provide: DataService, useClass: BooksService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('The title should be in an H1 tag', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('H1').innerHTML).toContain(
      'Hello , check out some of our bestsellers!'
    );
  });

  it('The total number of products should be same as the ones being fetched from the service', () => {
    let dataservice = TestBed.inject(DataService);
    expect(component.productList.length).toBe(dataservice.productList.length);
  });
});
