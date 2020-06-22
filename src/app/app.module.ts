import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import { CreateEventComponent } from './events/create-event/create-event.component';
import {Error404Component} from './errors/404.component';
import {EventsService} from './events.service';
import {ToastrService} from './toastr.service';
import {EventRouteActivator} from './events/event-details/event-route-activator.service';
import {EventsListResolver} from './events/events-list/events-list-resolver.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventsService,
    ToastrService,
    EventRouteActivator,
    EventsListResolver,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

// We added this function here just for convenience
export default function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty){
    return window.confirm('You have not saved this event, do you really want to canel?');
  }
  return true;
}
