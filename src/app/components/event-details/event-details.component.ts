import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: any;

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.eventsService.getEvent(1);
  }

}
