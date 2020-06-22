import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event:any;

  constructor() { }

  ngOnInit(): void {
  }

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time && this.event.time === '8:00 am';
    if (isEarlyStart){
      return ['green', 'bold'];
    }
    return [];
  }
}
