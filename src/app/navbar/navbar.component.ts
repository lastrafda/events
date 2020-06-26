import { Component, OnInit } from '@angular/core';
import {AuthService} from '../user/auth.service';
import {ISession} from '../events/event.model';
import {EventsService} from '../events.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm: string;
  foundSessions: ISession[];

  constructor(public authService: AuthService,
              private eventsService: EventsService) {
    this.searchTerm = '';
    this.foundSessions = [];
  }

  ngOnInit(): void {
  }

  searchSessions(searchTerm: string) {
    this.eventsService.searchSessions(searchTerm)
      .subscribe(sessions => {
        this.foundSessions = sessions;
        console.log(this.foundSessions);
      });
  }
}
