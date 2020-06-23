import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  constructor(public auth: AuthService,
              private router: Router) {

  }

  ngOnInit(): void {
    const firstName = new FormControl(this.auth.currentUser.firstName);
    const lastName = new FormControl(this.auth.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName,
      lastName,
    });
  }


  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues) {
    this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['events']);
  }
}
