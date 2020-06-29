import { Component, OnInit } from '@angular/core';
import {AuthService} from '../user/auth.service';
import {IEvent, ISession} from '../events/event.model';
import {EventsService} from '../events.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm: string;
  foundSessions: ISession[];
  events: IEvent[];

  constructor(public authService: AuthService,
              private eventsService: EventsService) {
    this.searchTerm = '';
    this.foundSessions = [];
    this.events = [];
  }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  searchSessions(searchTerm: string) {
    this.eventsService.searchSessions(searchTerm)
      .subscribe(sessions => {
        this.foundSessions = sessions;
      });
  }
}
