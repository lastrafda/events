import {EventsListComponent} from './components/events-list/events-list.component';
import {EventDetailsComponent} from './components/event-details/event-details.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];
