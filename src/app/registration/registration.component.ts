import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validCodeValidation } from './codeValidator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  signupForm: FormGroup;

  constructor() {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      code: new FormControl('', [Validators.required, validCodeValidation]),
      country: new FormControl('', [Validators.required]),
      gender: new FormControl(),
    });
  }

  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }

  get country() {
    return this.signupForm.get('country');
  }

  get code() {
    return this.signupForm.get('code');
  }

  ngOnInit() {}
}
