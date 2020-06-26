import {Component, Input, OnChanges} from '@angular/core';
import {ISession} from '../event.model';
import {AuthService} from '../../user/auth.service';
import {VoterService} from './voter.service';

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name){
    return 1;
  } else if (s1.name === s2.name) {
    return 0;
  }
  return -1;
}

function sortByVotes(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges{
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];

  constructor(private auth: AuthService,
              private voterService: VoterService) {}

  ngOnChanges() {
    if (this.sessions){
      // The reason why we are passing this.filterBy as a parameter
      // is because it makes the method itself stateless.
      this.filterSessions(this.filterBy);
      this.sortSessions();
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

  private sortSessions(){
    this.sortBy === 'name'
      ? this.visibleSessions.sort(sortByNameAsc)
      : this.visibleSessions.sort(sortByVotes);
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)){
      this.voterService.deleteVoter(session,
        this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(session,
        this.auth.currentUser.userName);
    }
    if (this.sortBy === 'votes'){
      this.visibleSessions.sort(sortByVotes);
    }
  }

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }
}
