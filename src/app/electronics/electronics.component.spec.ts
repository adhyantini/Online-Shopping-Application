import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectronicsService } from '../electronics.service';

import { ElectronicsComponent } from './electronics.component';

fdescribe('ElectronicsComponent', () => {
  let component: ElectronicsComponent;
  let fixture: ComponentFixture<ElectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectronicsComponent],
      providers: [
        { provide: ElectronicsService, useClass: ElectronicsService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('The total number of products should be same as the ones being fetched from the Electronics service', () => {
    let dataservice = TestBed.inject(ElectronicsService);
    expect(component.productList.length).toBe(dataservice.productList.length);
  });
});
