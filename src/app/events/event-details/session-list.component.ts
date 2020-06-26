import {Component, Input, OnChanges} from '@angular/core';
import {ISession} from '../event.model';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges{
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  visibleSessions: ISession[] = [];

  ngOnChanges() {
    if (this.sessions){
      // The reason why we are passing this.filterBy as a parameter
      // is because it makes the method itself stateless.
      this.filterSessions(this.filterBy);
    }
  }

  private filterSessions(filterBy: string) {
    if (filterBy === 'all'){
      this.visibleSessions = [...this.sessions];
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLowerCase() === filterBy;
      });
    }
  }
}
