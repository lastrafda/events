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
import {Toastr, TOASTR_TOKEN} from './toastr.service';
import {EventRouteActivator} from './events/event-details/event-route-activator.service';
import {EventsListResolver} from './events/events-list/events-list-resolver.service';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateSessionComponent} from './events/event-details/create-session.component';
import {SessionListComponent} from './events/event-details/session-list.component';
import {
  CollapsibleWellComponent,
  JQ_TOKEN, ModalTriggerDirective,
  SimpleModalComponent
} from './common';
import {DurationPipe} from './shared/duration.pipe';
import { UpvoteComponent } from './events/upvote/upvote.component';
import {VoterService} from './events/event-details/voter.service';
import {LocationValidatorDirective} from './events/create-event/location-validator.directive';

// @ts-ignore
const toastr: Toastr = window.toastr;
const jqKey = '$';
const jQuery = window[jqKey];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    SessionListComponent,
    CreateEventComponent,
    LocationValidatorDirective,
    CreateSessionComponent,
    Error404Component,
    CollapsibleWellComponent,
    SimpleModalComponent,
    DurationPipe,
    ModalTriggerDirective,
    UpvoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventsService,
    EventRouteActivator,
    EventsListResolver,
    AuthService,
    VoterService,
    { provide: TOASTR_TOKEN, useValue: toastr},
    { provide: JQ_TOKEN, useValue: jQuery},
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

// We added this function here just for convenience
export default function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty){
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
