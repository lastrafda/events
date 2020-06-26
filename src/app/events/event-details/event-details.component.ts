import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../events.service';
import {ActivatedRoute} from '@angular/router';
import {ISession} from "../event.model";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: any;
  addMode: boolean;
  filterBy: string;
  sortBy: string;

  constructor(private eventsService: EventsService,
              private route: ActivatedRoute) {
    this.filterBy = 'all';
    this.sortBy = 'votes';
  }

  ngOnInit(): void {
    this.event =
      this.eventsService.getEvent(+this.route.snapshot.params.id);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventsService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelNewSession(){
    this.addMode = false;
  }
}
