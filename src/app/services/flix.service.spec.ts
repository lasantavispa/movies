import { TestBed } from '@angular/core/testing';

import { FlixService } from './flix.service';

describe('FlixService', () => {
  let service: FlixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
