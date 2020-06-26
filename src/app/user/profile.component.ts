import {Component, OnInit, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {Toastr, TOASTR_TOKEN} from '../toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  constructor(public auth: AuthService,
              private router: Router,
              @Inject(TOASTR_TOKEN) private toastr: Toastr) {
    this.firstName = new FormControl(
      this.auth.currentUser.firstName, [Validators.required,
      Validators.pattern('[a-zA-Z].*')]
    );
    this.lastName = new FormControl(
      this.auth.currentUser.lastName, [Validators.required,
      Validators.pattern('[a-zA-Z].*')]
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
      this.toastr.success('Profile Saved');
    }
  }

  isValid(fieldName: string) {
    return this[fieldName].valid
      || this[fieldName].untouched;
  }
}
