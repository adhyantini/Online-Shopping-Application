import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';

fdescribe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('InValid Email', () => {
    let email = component.signupForm.controls.email;
    email.setValue('adhyantinigmail');
    expect(email.invalid).toBeTruthy();
  });

  it('InValid Password', () => {
    let password = component.signupForm.controls.password;
    password.setValue('adh'); // Length to be more than 3, hence invalid
    expect(password.invalid).toBeTruthy();
  });
});
