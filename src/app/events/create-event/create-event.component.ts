import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EventsService} from '../../events.service';

@Component({
  selector: 'app-create-event',
  templateUrl: 'create-event.component.html',
  styleUrls: ['create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  newEvent;
  isDirty: boolean;
  constructor(private router: Router,
              private eventsService: EventsService) {
    this.isDirty = true;
  }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues) {
    this.eventsService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(['/events']);
    });
  }
}
