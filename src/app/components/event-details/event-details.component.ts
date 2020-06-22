import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../events.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: any;

  constructor(private eventsService: EventsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.event =
      this.eventsService.getEvent(+this.route.snapshot.params.id);
  }

}
