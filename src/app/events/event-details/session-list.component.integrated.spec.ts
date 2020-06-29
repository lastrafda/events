import {
  TestBed,
  async,
  ComponentFixture
} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {SessionListComponent} from './session-list.component';
import {AuthService} from '../../user/auth.service';
import {VoterService} from './voter.service';
import {ISession} from '../event.model';
import {By} from 'protractor';
import {CollapsibleWellComponent} from '../../common';
import {DurationPipe} from '../../shared/duration.pipe';
import {UpvoteComponent} from '../upvote/upvote.component';

describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>;
  let component: SessionListComponent;
  let element: HTMLElement;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    const mockAuthService = {
      isAuthenticated: () => true,
      currentUser: {username: 'Joe'}
    };
    const mockVoterService = {
      userHasVoted: () => true
    };

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        UpvoteComponent,
        CollapsibleWellComponent,
        DurationPipe
      ],
      providers: [
        {provide: AuthService, useValue: mockAuthService},
        {provide: VoterService, useValue: mockVoterService}
      ],
      schemas: []
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('initial display', () => {
    it('should have the correct session title', () => {
      component.sessions = [
        {
          id: 3,
          name: 'Session 1',
          presenter: 'Joe',
          duration: 1,
          level: 'beginner',
          abstract: 'abstract',
          voters: ['john', 'joe']
        }
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;

      component.ngOnChanges();
      fixture.detectChanges();

      expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
      // Here is another way to get an element (It's more powerful than the element.querySelector)
      // expect(debugEl.query(By.css('[well-title]'))
      //  .nativeElement.textContent).toContain('Session 1');
    });
  });
});
