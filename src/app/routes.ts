import {EventsListComponent} from './events/events-list/events-list.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import { Routes } from '@angular/router';
import {CreateEventComponent} from './events/create-event/create-event.component';
import {Error404Component} from './errors/404.component';
import {EventRouteActivator} from './events/event-details/event-route-activator.service';
import {EventsListResolver} from './events/events-list/events-list-resolver.service';
import {CreateSessionComponent} from "./events/event-details/create-session.component";

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver}},
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  { path: 'events/session/new', component: CreateSessionComponent},
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren:  () => import('./user/user.module').then(m => m.UserModule)}
];
