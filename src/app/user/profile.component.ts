import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  constructor(public auth: AuthService,
              private router: Router) {
    this.firstName = new FormControl(
      this.auth.currentUser.firstName,
      Validators.required
    );
    this.lastName = new FormControl(
      this.auth.currentUser.lastName,
      Validators.required
    );
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues) {
    if (this.profileForm.valid){
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }
  }

  isValid(fieldName: string) {
    return this[fieldName].valid
      || this[fieldName].untouched;
  }
}
