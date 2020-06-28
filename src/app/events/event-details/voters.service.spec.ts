import {VoterService} from './voter.service';
import {ISession} from '../event.model';
import {Observable, of} from 'rxjs';

describe('VoterService', () => {
  let voterService: VoterService;
  let mockHttp;
  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post'])
    voterService = new VoterService(mockHttp);
  });

  describe('deleteVoter', () => {
    it('should remove the voter from the list of voters', () => {
      const session = { id: 6 , voters: ['joe', 'john']};
      mockHttp.delete.and.returnValue(of(false));

      voterService.deleteVoter(3, session as ISession, 'joe');

      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('john');
    });
  });
});
