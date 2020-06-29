import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../events.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from '../event.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(private eventService: EventsService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.events = this.route.snapshot.data.events;
  }

}
