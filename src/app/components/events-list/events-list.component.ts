import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../events.service';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventsService) {
  }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

}
