import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-event',
  template: `
    <h1>New Event</h1>
    <hr>
    <div class="col-md-6">
      <h3>asdasd</h3>
      <br>
      <br>
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button"
              class="btn btn-default"
              (click)="cancel()">Cancel</button>
    </div>
  `,
  styles: [
  ]
})
export class CreateEventComponent implements OnInit {

  isDirty: boolean;
  constructor(private router: Router) {
    this.isDirty = true;
  }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
