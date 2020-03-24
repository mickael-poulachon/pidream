import { TestBed } from '@angular/core/testing';

import { KeysEventService } from './keys-event.service';

describe('KeysEventService', () => {
  let service: KeysEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeysEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
