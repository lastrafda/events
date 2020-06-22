import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../events.service';
import {ToastrService} from '../../toastr.service';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventsService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(name: string) {
    this.toastrService.success(name);
  }
}
