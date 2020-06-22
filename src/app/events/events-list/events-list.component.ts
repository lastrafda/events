import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../events.service';
import {ToastrService} from '../../toastr.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any;

  constructor(private eventService: EventsService,
              private toastrService: ToastrService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.events = this.route.snapshot.data.events;
  }

  handleThumbnailClick(name: string) {
    this.toastrService.success(name);
  }
}
