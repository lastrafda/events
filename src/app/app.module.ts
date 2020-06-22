import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventThumbnailComponent } from './components/event-thumbnail/event-thumbnail.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
