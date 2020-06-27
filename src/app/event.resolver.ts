import {Injectable} from '@angular/core';
import {EventsService} from './events.service';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';

@Injectable()
export class EventResolver implements Resolve<any> {
  constructor(private eventsService: EventsService) {
  }

  resolve(route: ActivatedRouteSnapshot){
    return this.eventsService.getEvent(+route.params.id);
  }
}
