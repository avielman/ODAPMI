import { TestBed } from '@angular/core/testing';

import { emailService } from './email.service';

describe('EmailService', () => {
  let service: emailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(emailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});