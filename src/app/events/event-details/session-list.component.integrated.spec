import {
  TestBed,
  async,
  ComponentFixture
} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import { SessionListComponent} from './session-list.component';
import {AuthService} from '../../user/auth.service';
import {VoterService} from './voter.service';
import {ISession} from '../event.model';
import {By} from 'protractor';

describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>;
  let component: SessionListComponent;
  let element: HTMLElement;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    let mockAuthService = {};
    let mockVoterService ={};

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService}
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
});
